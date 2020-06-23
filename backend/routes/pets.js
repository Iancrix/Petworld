const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");
const Rescue = require("../models/Rescue");

// Filter Pets by any category
router.get("/:petType/filter", async (req, res) => {
	//console.log(req.query);
	const query = {};

	//console.log(req.params.petType);

	query["type"] = req.params.petType;

	var Raza_filters = [];
	var Genero_filters = [];
	var Edad_filters = [];

	for (let param in req.query) {
		if (param.includes("_")) {
			let strParam = param.split("_");

			let category = strParam[0];
			let index = strParam[1];

			let value = req.query[param];

			switch (category) {
				case "Breed":
					Raza_filters.push(value);
					query["breed"] = { $in: Raza_filters };
					break;
				case "Genre":
					Genero_filters.push(value);
					query["genre"] = { $in: Genero_filters };
					break;
				case "Age":
					Edad_filters.push(value);
					query["age"] = { $in: Edad_filters };
					break;
			}
		}
	}

	//console.log(query);

	var elementSize = /*parseInt(req.query["el_sz"]);*/ 8;
	var indexPage = parseInt(req.query["page_index"]);

	var skipElements = (indexPage - 1) * elementSize;

	var count = 0;

	await Pet.find(query)
		.then(data => {
			count = data.length;
		})
		.catch(error => console.log(error.message));

	Pet.find(query)
		.limit(elementSize)
		.skip(skipElements)
		.then(data => {
			//console.log("Max PAGES " + Math.ceil(count / elementSize));
			res.status(200).json({
				pets: data, //data.slice(0, elementSize),
				count: count,
				maxPages: Math.ceil(count / elementSize),
			});
		})
		.catch(error => res.status(400).json({ msg: error.message }));
});

// Get amount per category
router.get("/:petType/count", async (req, res) => {
	var results = {};

	console.log(req.params.petType);

	await Pet.aggregate([
		{ $match: { type: req.params.petType } },
		{ $group: { _id: "$breed", count: { $sum: 1 } } },
	])
		.then(data => {
			results["breed"] = data;
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	await Pet.aggregate([
		{ $match: { type: req.params.petType } },
		{ $group: { _id: "$genre", count: { $sum: 1 } } },
	])
		.then(data => {
			results["genre"] = data;
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	await Pet.aggregate([
		{ $match: { type: req.params.petType } },
		{ $group: { _id: "$age", count: { $sum: 1 } } },
	])
		.then(data => {
			results["age"] = data;
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	res.status(200).json(results);
});

// Get All Pets
router.get("/", async (req, res) => {
	try {
		const pets = await Pet.find();
		if (!pets) throw Error("No pets were found");

		res.status(200).json(pets);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Post a Pet
router.post("/", async (req, res) => {
	const pet = new Pet({
		name: req.body.name,
		age: req.body.age,
		genre: req.body.genre,
		breed: req.body.breed,
		location: req.body.location,
		country: req.body.country,
		description: req.body.description,
		perks: req.body.perks,
		image: req.body.image,
		rescue: req.body.rescue,
	});

	try {
		const savedPet = await pet.save();
		if (!savedPet) throw Error("Something went wrong saving the pet");

		res.status(200).json(savedPet);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Post many pets
router.post("/insertpets", async (req, res) => {
	try {
		const pets = req.body.pets;

		for (var i in pets) {
			const pet = new Pet({
				name: pets[i].name,
				type: pets[i].type,
				age: pets[i].age,
				genre: pets[i].genre,
				breed: pets[i].breed,
				location: pets[i].location,
				country: pets[i].country,
				description: pets[i].description,
				perks: pets[i].perks,
				image: pets[i].image,
				rescue: pets[i].rescue,
			});

			const savedPet = await pet.save();

			const rescue = await Rescue.findById(pets[i].rescue);

			if (!rescue) throw Error("No rescue was found with that id");

			const petId = savedPet._id;
			rescue.pets.push(petId);

			const updatedRescue = await rescue.save();
			if (!updatedRescue)
				throw Error("Something went wrong while trying to update the rescue");
		}

		res.status(200).json({ msg: "Success" });
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Get specific Pet
router.get("/:petId", (req, res) => {
	Pet.findById(req.params.petId)
		.populate("rescue")
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => res.status(400).json({ msg: err }));
});

// Delete Pet
router.delete("/:petId", async (req, res) => {
	try {
		const pet = await Pet.findById(req.params.petId);
		if (!pet) throw Error("No pet was found with that id");

		const removedPet = await pet.remove();
		if (!removedPet)
			throw Error("Something went wrong while trying to delete the pet");

		// O solo esto
		//const removedPet = await Pet.deleteOne({ _id: req.params.petId });

		res.status(200).json(removedPet);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Update a Pet
router.put("/:petId", async (req, res) => {
	try {
		const pet = await Pet.findById(req.params.petId);
		if (!pet) throw Error("No pet was found with that id");

		// Deben venir todos los parametros en el body de la solicitud o mejor se checkea
		pet.name = req.body.name;
		/*
		pet.age = req.body.age;
		pet.breed = req.body.breed;
		pet.location = req.body.location;
		pet.country = req.body.country;
		pet.description = req.body.description;
		pet.perks = req.body.perks;
		pet.image = req.body.image;
		pet.id_rescue = req.body.id_rescue;
        */
		const updatedPet = await pet.save();
		if (!updatedPet)
			throw Error("Something went wrong while trying to update the pet");

		res.status(200).json(updatedPet);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

/*
router.post("/", (req, res) => {
	const pet = new Pet({
		name: req.body.name,
		age: req.body.age,
		breed: req.body.breed,
		location: req.body.location,
		country: req.body.country,
		description: req.body.description,
		perks: req.body.perks,
		image: req.body.image,
		id_rescue: req.body.id_rescue,
	});

	pet
		.save()
		.then(data => {
			res.json(data);
		})
		.catch(err => res.json({ message: err }));
});
*/

module.exports = router;

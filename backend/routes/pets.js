const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

// Filter Pets by breed
router.get("/filter", (req, res) => {
	const query = {};

	var Raza_filters = [];
	var Genero_filters = [];
	var Edad_filters = [];

	for (let param in req.query) {
		let strParam = param.split("_");

		let category = strParam[0];
		let index = strParam[1];

		let value = req.query[param];

		switch (category) {
			case "Raza":
				Raza_filters.push(value);
				query["breed"] = { $in: Raza_filters };
				break;
			case "Genero":
				Genero_filters.push(value);
				query["genre"] = { $in: Genero_filters };
				break;
			case "Edad":
				Edad_filters.push(value);
				query["age"] = { $in: Edad_filters };
				break;
		}
	}

	Pet.find(query)
		/*.limit(2)*/
		/*.skip(10)*/
		.then(data => res.status(200).json(data))
		.catch(error => res.status(400).json({ msg: error.message }));
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

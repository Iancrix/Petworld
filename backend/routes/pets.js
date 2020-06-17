const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

// Filter Pets by breed
router.get("/breed", (req, res) => {
	/*
	Pet.find({ breed: "Labrador Retriever" }, "name", (error, docs) => {
		if (error) throw Error("Error found");

		console.log(docs);
    });
    */
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
		breed: req.body.breed,
		location: req.body.location,
		country: req.body.country,
		description: req.body.description,
		perks: req.body.perks,
		image: req.body.image,
		id_rescue: req.body.id_rescue,
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
router.get("/:petId", async (req, res) => {
	try {
		const pet = await Pet.findById(req.params.petId);
		if (!pet) throw Error("No pet was found with that id");

		res.status(200).json(pet);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
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

const express = require("express");
const router = express.Router();
const Rescue = require("../models/Rescue");

// Get All Rescues
router.get("/", async (req, res) => {
	try {
		const rescues = await Rescue.find();
		if (!rescues) throw Error("No rescues were found");

		res.status(200).json(rescues);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Post a Rescue
router.post("/", async (req, res) => {
	const rescue = new Rescue({
		name: req.body.name,
		city: req.body.city,
		email: req.body.email,
		contact: req.body.contact,
		pets: req.body.pets,
	});

	try {
		const savedRescue = await rescue.save();
		if (!savedRescue) throw Error("Something went wrong saving the rescue");

		res.status(200).json(savedRescue);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Get specific Rescue
router.get("/:rescueId", (req, res) => {
	Rescue.findById(req.params.rescueId)
		.populate("pets")
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => res.status(400).json({ msg: err }));
});

// add Pet to Rescue
router.post("/:rescueId", async (req, res) => {
	try {
		const rescue = await Rescue.findById(req.params.rescueId);
		if (!rescue) throw Error("No rescue was found with that id");

		const petId = req.body.pet_id;
		rescue.pets.push(petId);

		const updatedRescue = await rescue.save();
		if (!updatedRescue)
			throw Error("Something went wrong while trying to update the rescue");

		res.status(200).json(updatedRescue);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

module.exports = router;

const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	age: { type: String, required: true },
	genre: { type: String, required: true },
	breed: { type: String, required: true },
	location: { type: String, required: true },
	country: { type: String, required: true },
	description: { type: String, required: true },
	perks: { type: [String], required: true },
	image: { type: String, required: true },
	rescue: { type: mongoose.Schema.Types.ObjectId, ref: "Rescue" },
});

module.exports = mongoose.model("Pet", PetSchema, "pets");

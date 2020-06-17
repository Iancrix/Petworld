const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
	name: { type: String, required: true },
	age: { type: String, required: true },
	breed: { type: String, required: true },
	location: { type: String, required: true },
	country: { type: String, required: true },
	description: { type: String, required: true },
	perks: { type: [String], required: true },
	image: { type: String, required: true },
	id_rescue: { type: String, required: true },
});

module.exports = mongoose.model("Pets", PetSchema, "pets");

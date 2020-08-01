const mongoose = require("mongoose");

const RescueSchema = mongoose.Schema({
	name: { type: String, required: true },
	city: { type: String, required: true },
	email: { type: String, required: true },
	contact: { type: String, required: true },
	pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
});

module.exports = mongoose.model("Rescue", RescueSchema, "rescues");

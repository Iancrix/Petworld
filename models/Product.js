const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	brand: { type: String, required: true },
	image: { type: String, required: true },
	category: { type: String, required: true },
	units: {
		type: Number,
		required: true,
		set: function (v) {
			return Math.round(v);
		},
	},
	size: mongoose.Schema.Types.Mixed,
	description: { type: String, required: true },
	animaltype: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema, "products");

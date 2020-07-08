const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// Filter Products by any category
router.get("/:productType/filter", async (req, res) => {
	const query = {};

	if (req.query.searchfor) {
		let regex = new RegExp(req.query.searchfor, "i");
		query["name"] = { $regex: regex };
	}

	query["category"] = req.params.productType;

	var Animal_filters = [];
	var Size_filters = [];
	var Brand_filters = [];
	var Price_filters = [];

	for (let param in req.query) {
		if (param.includes("_")) {
			let strParam = param.split("_");

			let category = strParam[0];
			let index = strParam[1];

			let value = req.query[param];

			switch (category) {
				case "Animal":
					Animal_filters.push(value);
					query["animaltype"] = { $in: Animal_filters };
					break;
				case "Size":
					let sizeValue = value.split(" ");
					//console.log(sizeValue[1]);
					Size_filters.push({ size: { $lte: parseInt(sizeValue[1]) } });

					query["$or"] = Size_filters.concat(Price_filters);
					break;
				case "Brand":
					Brand_filters.push(value);
					query["brand"] = { $in: Brand_filters };
					break;
				case "Price":
					let priceValue = value.split(" ");
					//console.log(priceValue[2]);
					Price_filters.push({ price: { $lte: parseInt(priceValue[2]) } });

					query["$or"] = Price_filters.concat(Size_filters);
					break;
			}
		}
	}
	//console.log(Size_filters);

	//console.log(query);
	var elementSize = 8;
	var indexPage = parseInt(req.query["page_index"]);

	var skipElements = (indexPage - 1) * elementSize;

	var count = 0;

	await Product.find(query)
		.then(data => {
			count = data.length;
		})
		.catch(error => console.log(error.message));

	Product.find(query)
		.limit(elementSize)
		.skip(skipElements)
		.then(data => {
			res.status(200).json({
				products: data,
				count: count,
				maxPages: Math.ceil(count / elementSize),
			});
		})
		.catch(error => res.status(400).json({ msg: error.message }));
});

// Get amount per category
router.get("/:productType/count", async (req, res) => {
	var results = {};

	//console.log(req.params.productType);

	await Product.aggregate([
		{ $match: { category: req.params.productType } },
		{ $group: { _id: "$animaltype", count: { $sum: 1 } } },
	])
		.then(data => {
			results["animal"] = data;
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	await Product.aggregate([
		{ $match: { category: req.params.productType } },
		{ $group: { _id: "$brand", count: { $sum: 1 } } },
	])
		.then(data => {
			results["brand"] = data;
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	var price = [];

	await Product.find({
		category: req.params.productType,
		price: { $lte: 50000 },
	})
		.then(data => {
			var pricelte = {
				_id: "< $ 50000",
				count: 0,
			};

			for (var i in data) {
				pricelte.count = pricelte.count + 1;
			}

			price.push(pricelte);
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	await Product.find({
		category: req.params.productType,
		price: { $lte: 100000 },
	})
		.then(data => {
			var pricelte = {
				_id: "< $ 100000",
				count: 0,
			};

			for (var i in data) {
				pricelte.count = pricelte.count + 1;
			}

			price.push(pricelte);
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	await Product.find({
		category: req.params.productType,
		price: { $lte: 200000 },
	})
		.then(data => {
			var pricelte = {
				_id: "< $ 200000",
				count: 0,
			};

			for (var i in data) {
				pricelte.count = pricelte.count + 1;
			}

			price.push(pricelte);
		})
		.catch(error => res.status(400).json({ msg: error.message }));

	results["price"] = price;

	switch (req.params.productType) {
		case "Costumes":
			await Product.aggregate([
				{ $match: { category: req.params.productType } },
				{ $group: { _id: "$size", count: { $sum: 1 } } },
			])
				.then(data => {
					results["size"] = data;
				})
				.catch(error => res.status(400).json({ msg: error.message }));
			break;
		case "Nutrition":
			var size = [];

			await Product.find({
				category: req.params.productType,
				size: { $lte: 20 },
			})
				.then(data => {
					var sizelte = {
						_id: "< 20 Lb",
						count: 0,
					};

					for (var i in data) {
						sizelte.count = sizelte.count + 1;
					}

					size.push(sizelte);
					//console.log("Aparecieron" + sizelte.count);
				})
				.catch(error => res.status(400).json({ msg: error.message }));

			await Product.find({
				category: req.params.productType,
				size: { $lte: 30 },
			})
				.then(data => {
					var sizelte = {
						_id: "< 30 Lb",
						count: 0,
					};

					for (var i in data) {
						sizelte.count = sizelte.count + 1;
					}

					size.push(sizelte);
					//console.log("Aparecieron" + sizelte.count);
				})
				.catch(error => res.status(400).json({ msg: error.message }));

			await Product.find({
				category: req.params.productType,
				size: { $lte: 40 },
			})
				.then(data => {
					var sizelte = {
						_id: "< 40 Lb",
						count: 0,
					};

					for (var i in data) {
						sizelte.count = sizelte.count + 1;
					}

					size.push(sizelte);
					//console.log("Aparecieron" + sizelte.count);
				})
				.catch(error => res.status(400).json({ msg: error.message }));

			results["size"] = size;
			break;
	}

	res.status(200).json(results);
});

// Get All Products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		if (!products) throw Error("No products were found");

		res.status(200).json(products);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Post a Product
router.post("/", async (req, res) => {
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		brand: req.body.brand,
		image: req.body.image,
		category: req.body.category,
		units: req.body.units,
		size: req.body.size,
		description: req.body.description,
		animaltype: req.body.animaltype,
	});

	try {
		const savedProduct = await product.save();
		if (!savedProduct) throw Error("Something went wrong saving the product");

		res.status(200).json(savedProduct);
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

// Post many products
router.post("/insertproducts", async (req, res) => {
	try {
		const products = req.body.products;

		for (var i in products) {
			const product = new Product({
				name: products[i].name,
				price: products[i].price,
				brand: products[i].brand,
				image: products[i].image,
				category: products[i].category,
				units: products[i].units,
				size: products[i].size,
				description: products[i].description,
				animaltype: products[i].animaltype,
			});

			const savedProduct = await product.save();
			if (!savedProduct) throw Error("Something went wrong saving the product");
		}

		res.status(200).json({ msg: "Success" });
	} catch (e) {
		res.status(400).json({ message: e.message });
	}
});

module.exports = router;

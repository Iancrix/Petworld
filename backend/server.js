const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());

// Import Routes

const petsRoute = require("./routes/pets");
app.use("/pets/", petsRoute);

// DB Connection
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch(err => console.log(err));

// Server Init
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

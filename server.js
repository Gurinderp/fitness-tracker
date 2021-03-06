const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});

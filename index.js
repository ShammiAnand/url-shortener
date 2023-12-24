const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = 8000;

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/static");
const userRoute = require("./routes/user");

const { enforceLoggedIn } = require("./middlewares/auth");

const connectToMongo = require("./connections");
connectToMongo(process.env.MONGO_CONNECTION_STRING).then(() =>
  console.log("connected to MongoDB")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/url", enforceLoggedIn, urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});

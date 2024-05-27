const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes.js");
const carRouter = require("./routes/carRoutes.js");

const corsConfig = { origin: "*",
credential: true,
methods: ["GET", "POST", "PUT", "DELETE"],
};
const PORT=process.env.port;
require("dotenv").config();


mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to mongodb:cluster1/CarsMernDB");
    // populateCars();
    // populateMembers();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(cors(corsConfig))

//routers
app.use("/api/user", userRouter);
app.use("/api/car", carRouter);

// Post Ad Route
// app.post('/postadd', upload.array('images[]'), async (req, res) => {
//   console.log(req.body);
//   try {
//     const imagePaths = req.files.map(file => file.path);
//     const newCarData = {
//       ...req.body,
//       make: req.body.make.toLowerCase(),
//       model: req.body.model.toLowerCase(),
//       images: imagePaths,
//       location: "lahore",
//       owner: "6647488ba3202018f986ed2d",
//     };

//     const car = new Car(newCarData);
//     await car.save();
//     res.status(200).send(car);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error Posting Ad!' });
//   }
// });

app.listen(PORT, () => {
  console.log("Server started at port 5000");
});

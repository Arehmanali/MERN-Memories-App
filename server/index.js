import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRouter from "./routes/posts.js";

const app = express();
app.use(cors());

app.use("/posts", postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL =
  "mongodb+srv://learningmern:learningmern@cluster0.hu9ub.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || "5000";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

//mongoose.set("useFindAndModify", false);

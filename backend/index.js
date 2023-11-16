import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || "8080";
connectDB();
const app = express();

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/menu", menuRoutes);
app.use("/checkout", checkoutRoutes);
app.get("/", (req, res) => res.json("Server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));

export { app };

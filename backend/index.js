import express from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";
import menuRoutes from "./routes/menuRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || "8080";
connectDB();
const app = express();
app.use(
  cors({
    origin: ["https://mo-burgerz-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.static("public"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/menu", menuRoutes);
app.use("/api/checkout", checkoutRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;

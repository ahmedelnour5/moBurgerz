import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";
import menuRoutes from "./routes/menuRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config({ path: "../.env" });
const port = process.env.PORT || "8080";
connectDB();
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/menu", menuRoutes);
app.use("/api/checkout", checkoutRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Server is ready"));
}

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;

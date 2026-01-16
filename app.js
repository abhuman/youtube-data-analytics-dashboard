import express from "express";
import analyticsRoutes from "./routes/analytics.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/analytics", analyticsRoutes);
app.use(errorMiddleware);

export default app;

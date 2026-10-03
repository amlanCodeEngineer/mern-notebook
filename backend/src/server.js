import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config()

const PORT = process.env.PORT || 5001;
const app = express();


//middleware - to able to use JSON in the request body on notesController.js, we need to use the express.json() middleware in the server.js file. This middleware parses incoming JSON requests and makes the data available in req.body.
app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(express.json());
app.use(rateLimiter) //before response the ratelimiter middleware !


app.use("/api/notes", notesRoutes)


//what is an Endpoint? -> An endpoint is a combination of a URL + HTTP method that lets te client interact with a specifix resource.

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
})


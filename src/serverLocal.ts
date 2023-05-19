import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 80;

app.use(cors());
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  return res.json({
    message: "pong",
  });
});

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

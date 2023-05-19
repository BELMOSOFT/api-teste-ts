import express, { Express, Request, Response } from "express";
import cors from "cors";
import https from "https";
import fs from "fs";

const app: Express = express();
const port = 443; // HTTPS servers typically run on port 443

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

// Create the HTTPS server using your new SSL certificate
const server = https.createServer(
  {
    key: fs.readFileSync(
      "/etc/letsencrypt/live/estoquedacasa.com.br/privkey.pem"
    ),
    cert: fs.readFileSync(
      "/etc/letsencrypt/live/estoquedacasa.com.br/fullchain.pem"
    ),
  },
  app
);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

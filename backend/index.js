import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/db.js";
import Users from "./routes/userRoute.js";
import maquina from "./routes/maquinaRoute.js";
import proveedor from "./routes/ProveedoresRoute.js";

import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize";
dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

(async () => {
  await db.sync();
})();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http//localhost:5000",
  })
);

app.use(express.json());
app.use(Users);
app.use(maquina);
app.use(AuthRoute);
app.use(proveedor);

//store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Servidor corriendo......");
});

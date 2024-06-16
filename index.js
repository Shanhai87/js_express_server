import express from "express"
import path from "path"
import { createTable } from "./database_postgres/create_table.js";

const app = express();
const PORT = process.env.PORT ?? 2000;
(async () => {await createTable()})();

import userRoutes from "./routes/users.js"

app.set("view engine", "ejs");
app.set("views", path.resolve("ejs"));
app.use(express.static(path.resolve("static")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(userRoutes);

app.get("/", (req, res) => {
    res.render("index", {title: "Main Page", active: "main"});
})
app.get("/content", (req, res) => {
    res.render("content", {title: "Content Page", active: "content"});
})
app.get("/content/:id", (req, res) => {
    res.render("user", {title: "User Page", active: "user", userId: req.params.id});
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`));
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

// Adds headers: Access-Control-Allow-Origin: *
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.use(cors({ headers: { "Access-Control-Allow-Origin": "*" } }));

// a. / → Mensaje de bienvenida al sistema.
app.get("/", (req, res) => {
    res.send("Hola (^_^)/!");
});

// b. /aprendices → Mensaje descriptivo sobre la gestión de aprendices.
app.get("/aprendices", (req, res) => {
    res.send(
        "todos los metodos relacionados con aprencices estan el la ruta /aprendices, leer,crear,actualizar,borrar",
    );
});
// c. /programas → Mensaje descriptivo sobre los programas de formación.
app.get("/programas", (req, res) => {
    res.send(
        "los programas de formacion existentes son: programacion de software, analisis y desarrollo de software, HSEQ, mantenimiento de quipo de computo, cnc",
    );
});


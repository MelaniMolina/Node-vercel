const express= require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("Landing page - Grupo #")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Byron",
            "apellido":"Loarte",
            "edad":34
        },
        {
            "nombre":"Juan",
            "apellido":"Álvear",
            "edad":38
        },
        {
            "nombre":"Ximena",
            "apellido":"Salazar",
            "edad":33
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})

app.listen(port);
console.log(`Listen en Port ${port}`);
const express= require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 2")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Wilson",
            "apellido":"Guayanay",
            "edad":20
        },
        {
            "nombre":"Josue",
            "apellido":"Salazar",
            "edad":20
        },
        {
            "nombre":"Marlon",
            "apellido":"Lalangui",
            "edad":20
        },
        {
            "nombre":"Melani",
            "apellido":"Molina",
            "edad":20
        },
        {
            "nombre":"Katherine",
            "apellido":"Cangahuamin",
            "edad":24
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
                
                   <style>
                        body {
                            text-align: center;
                        }
                
                        h1 {
                            color: #333;
                        }
                
                        .product-list {
                            list-style-type: none;
                            padding: 0;
                            margin: 20px 0;
                        }
                
                        .product-list li {
                            margin-bottom: 10px;
                        }
                
                        .product-list li span {
                            display: inline-block;
                            width: 100px;
                            text-align: left;
                        }
                
                        .btn {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #333;
                            color: #fff;
                            text-decoration: none;
                            margin: 10px;
                        }
                
                        .btn:hover {
                            background-color: #555;
                        }
                    </style>
                <body>
                    <h1>Catálogo de productos</h1>
                    <p>Bienvenidos</p>
                
                    <ul class="product-list">
                        <li>
                            <span>Producto 1:</span>
                            <span>$10.00</span>
                        </li>
                        <li>
                            <span>Producto 2:</span>
                            <span>$15.00</span>
                        </li>
                        <li>
                            <span>Producto 3:</span>
                            <span>$20.00</span>
                        </li>
                        <!-- Agrega más productos aquí -->
                
                    </ul>
                
                    <a href="#" class="btn">Guardar compra</a>
                    <a href="#" class="btn">Cancelar compra</a>
                </body>
                </html>
                
    `)
})

app.listen(port);
console.log(`Listen en Port ${port}`);
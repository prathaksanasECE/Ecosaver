const express = require("express");
const app = express();
const cors = require("cors");

//MiddleWare

app.use(cors())

app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Only allow GET and POST requests
    allowedHeaders: ['Content-Type'], // Only allow these headers
}));
app.use(express.json());



//mongoDb
const mongo = require("./mongo/Connection")
mongo();


//routes
const product = require('./routes/Product');
const order = require('./routes/Order')
const account = require("./routes/Account")
const login= require("./routes/Logincheck")


app.use("/product", product);
app.use("/order", order);
//Grouped product
app.use('/grouped',product);

//Login & Signup
app.use("/accountDetails",account)
app.post("/Login",login)
app.use("/profile",account)

app.use("/", (req, res) => {
    res.send("1st");
})


app.listen(3000);




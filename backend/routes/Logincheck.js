const express = require("express");
const app = express();
const router = express.Router()

const store = require("../mongo/models/AccountModel");

router.post('/login', async (req, res) => {
    app.use(express.json());
    const { email, password, role } = req.body;
    console.log(req.body)
    await store.findOne({ email })
        .then(data => {
            console.log(res);
            if (data) {
                if (data.password === password && data.role === role) {
                    res.json({
                        "message":"Done",
                        "user_id":data._id
                    })
                }
                else {
                    res.json("Wrong Credentials");
                }
            }
            else {
                res.json("Account doesn't exists");
            }
        })
        .catch((err)=>{
            console.log("error occured");
        })
})

module.exports = router;



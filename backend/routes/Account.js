const express=require("express");
const router=express.Router();
const AccountCenter=require("../mongo/models/AccountModel");

router.post('/', async (req, res) => {
        try{
        const { name, email, phone, password, role } = req.body;
        const exist=await AccountCenter.findOne({
            $or: [
            { email: email },
            { phone: phone }
          ]})

        if(exist){
            return res.json("Already Existss")
        }
        const dataSend = await AccountCenter.create({
            name,
            email,
            phone,
            password,
            role
        });
        
        await dataSend.save();
        // res.status(201).json({ dataSend });
        res.send("Successs")
        }
     catch(err){
        res.send("Error Occurred ");
        console.log(err);
     }
});

router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const data=await AccountCenter.findById(id);
    res.json(data);
    // console.log(data);
})

module.exports = router;

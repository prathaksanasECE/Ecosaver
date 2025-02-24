const mongo=require("mongoose");

const orders=require("./OrderModel");
const NewAccount=new mongo.Schema({
    name: {
        type: String,
        required: true, 
        trim: true,      // Trims extra spaces
      },
      email: {
        type: String,
        required: true,
        unique: true,    // Ensures no duplicate emails
        lowercase: true, // Converts email to lowercase before saving
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'] // Email validation regex
      },
      phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] // Validates phone number format
      },
      password: {
        type: String,
        required: true,
        minlength: [8, 'Password should be at least 8 characters long'] // Minimum length for password
      },
      verifyPassword: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['buyer', 'seller'], // Ensures role is either 'buyer' or 'seller'
        default: 'buyer', // Default value is 'buyer'
        required:true
      },


      //In profile 
      orders:[{ type: mongo.Schema.Types.ObjectId, ref: "OrderedItems" }],
      Location:String,
      UPI_Number:Number,
      Account_Number:Number

    });

    const AccountModel=mongo.model("accounts",NewAccount);

    module.exports=AccountModel;
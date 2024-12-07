const userModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req,res) => {
    try {
        const {email,password,username} = req.body;
        const user = await userModel.findOne({email});
        if (user) {
            return res.status(400).json({msg : "User is already exist", success : false});
        }
        const newUser = new userModel({username,email,password});
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(200)
        .json({
            msg: "Sign Up Success",
            success: true
        })

    } catch (err){
        if (err.name === "ValidationError") {
            return res.status(400).json({ msg: "Invalid input", success: false });
        }
        res.status(500).json({ msg: "Server Error", success: false });
    };
}

const login = async (req,res) => {
    try {
        const {email, password} = req.body; 
        const user = await userModel.findOne({email});
        const errorMsg = "Email or Password is wrong"
        if (!user) {
            return res.status(403).json({msg : errorMsg, success : false});
        }
        const isPassequal = await bcrypt.compare(password, user.password);
        if(!isPassequal){
            return res.status(403).json({msg : errorMsg, success : false});
        }
        const jwtToken = jwt.sign(
            {
                email:user.email, _id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h'}
        )

        res.status(200).json({
            msg: "Login Success",
            success : true,
            jwtToken,
            email,
            username: user.username
        })
    } catch (err){
        res.status(500).json({
            msg: "Server Error" , success: false
        })
    };
}

module.exports = {
    signup , login
}
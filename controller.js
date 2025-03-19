const User = require("./model")

const signup = async(req,res) => {
    try {
        const { username, email, password, dateOfBirth } = req.body;

        if(!username){
            return res.status(400).json({message: "Username cannot be empty"})
        }

        if(!email){
            return res.status(400).json({message: "Email cannot be empty"})
        }

        if(password.length>16 || password.length<=8 ){
            return res.status(400).json({message: "Password length should be greater than 8 and less than or equal to 16"})
        }


        const user = new User({
            username,
            email,
            password,
            dateOfBirth
        })

        await user.save();

        res.status(200).json({message: "User created"})


    }catch(err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { signup };
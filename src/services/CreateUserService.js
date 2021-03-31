const { hash } = require("bcryptjs");

const User = require('../models/User');


class CreateUserService {
  async execute(requestDTO) {

    const { name, email, password } = await requestDTO;

    const userExists = await User.findOne({ email });
  
    if (userExists){
      throw new Error('User already exists ');
    }
    const hashedPassword = await hash(password, 8);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });
  
    await user.save();
  
    delete user.password;
  
    return user;
  }
}

module.exports = CreateUserService;
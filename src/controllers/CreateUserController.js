const CreateUserService = require('../services/CreateUserService');

class CreateUserController {

  async create(req, res) {
    const { name, email, password } = req.body;
  
    try {
      const createUser = new CreateUserService();
  
      const user = await createUser.execute({
        name: name,
        email: email,
        password: password
      });

      console.log(user);
        
      delete user.password;
    
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new CreateUserController();

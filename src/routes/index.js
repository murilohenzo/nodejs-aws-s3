require("dotenv").config();

const multer = require("multer");
const { Router } = require("express");

const multerConfig = require("../config/multer");
const CreateFileController = require("../controllers/CreateFileController");
const CreateUserController = require("../controllers/CreateUserController");

require("../config/database");

const routers = Router();

routers.post('/files', multer(multerConfig).single("file"), CreateFileController.create);
routers.post('/users', CreateUserController.create);

module.exports = routers;
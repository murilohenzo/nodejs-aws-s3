require("dotenv").config();

const { Router } = require("express");

const FileController = require("../controllers/FileController");

require("../config/database");

const routers = Router();

routers.use('/files', FileController);

module.exports = routers;
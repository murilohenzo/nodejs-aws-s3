const { Router } = require('express');
const aws = require('aws-sdk');
const encode = require('../utils/encode');

const File = require('../models/File');

class FileController {

  async create(req, res) {
    const { originalname: name, size, key, location: url = '' } = req.file;
  
    const file = await File.create({
      name,
      size,
      key,
      url
    });
  
    return res.json(file);
  }

  async show(req, res) {
    const { key } = req.params;
  
    const s3 = new aws.S3({
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      region: process.env.AWS_DEFAULT_REGION
    });
  
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key
    }
  
    s3.getObject(params).promise().then((data) => {
      return res.json(encode(data.Body))
    }).catch(() => {
      return res.json({ error: 'Houve um erro ao tentar recuperar a imagem' })
    });
  }
  
  async delete(req, res) {
    const { key } = req.params;
  
    if (!key) return res.status(400).json({ message: 'Id não encontrado ' });
  
    const file = await File.findOne(key);
  
    await file.remove();
  
    return res.json({ message: 'Foto de perfil deletada' });
  };
};



module.exports = new FileController();

function encode(image) {
  let buffImage = Buffer.from(image)
  let base64 = buffImage.toString('base64')
  return base64
}

module.exports = encode

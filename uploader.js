const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const splittedName = file.originalname.split('.');
    const extension = splittedName[splittedName.length - 1];
    const base64Name =  Buffer.from(file.originalname).toString('base64');
    cb(null, `${base64Name}-${Date.now()}.${extension}`);
  }
});

module.exports = multer({ storage });
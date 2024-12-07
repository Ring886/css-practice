const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(cors({
  'Access-Allow-Control-Origin': 'http://localhost:4000'
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploadfile/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

app.post('/uploadfile', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(200).json({ filePath: `/uploadfile/${req.file.filename}` });
});

app.use('/uploadfile', express.static(path.join(__dirname, 'uploadfile')));

app.listen(4000, () => console.log('服务器已启动'));
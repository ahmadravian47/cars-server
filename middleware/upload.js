// // middleware/upload.js
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const createStorage = (carId) => {
//   let fileIndex = 0; // Initialize a counter for filenames

//   return multer.diskStorage({
//     destination: (req, file, cb) => {
//       const uploadDir = path.join(__dirname, '../uploads', carId.toString());
//       fs.mkdirSync(uploadDir, { recursive: true });
//       cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname).toLowerCase();
//       cb(null, `${fileIndex++}${ext}`); // Generate filenames like 0.png, 1.png, etc.
//     },
//   });
// };

// const uploadMiddleware = (carId) => multer({
//   storage: createStorage(carId),
//   // limits: { fileSize: 1000000 }, // Limit file size to 1MB
//   fileFilter: (req, file, cb) => {
//     console.log('Multer',file);
//     // const filetypes = /jpeg|jpg|png|gif/;
//     const filetypes = ['png','jpg','jpeg'];
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);

//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }
// }).array('images');

// module.exports = uploadMiddleware;








// middleware/upload.js
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const createStorage = (carId) => {
//   let fileIndex = 0;

//   return multer.diskStorage({
//     destination: (req, file, cb) => {
//       const uploadDir = path.join(__dirname, '../uploads', carId.toString());
//       fs.mkdirSync(uploadDir, { recursive: true });
//       cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname).toLowerCase();
//       cb(null, `${fileIndex++}${ext}`);
//     },
//   });
// };

// const uploadMiddleware = (carId) => multer({
//   storage: createStorage(carId),
//   limits: { fileSize: 9000000 },
//   fileFilter: (req, file, cb) => {
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);

//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   }
// }).array('images');

// module.exports = uploadMiddleware;





// middleware/upload.js
const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: '../frontend/public/assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 9000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  // const filetypes = ['png','jpg','jpeg'];
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;

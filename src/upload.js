import multer from "multer";

const upload = multer({ dest: "uploads/" });
export const uploadMiddleware = upload.single("file");

export const uploadController = (req, res) => {
  const {
    file: { path }
  } = req;
  res.json({ path });
};

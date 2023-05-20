import { Request, Response } from "express";
import multer from "multer";
import { createRouter } from "next-connect";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
});

const uploadFile = upload.single("file");

const router = createRouter<Request, Response>();

router.use(uploadFile);

router.post(async (req: Request, res: Response) => {
  console.log("file : ", req.file);
  console.log("body : ", req.body);

  console.log("filename : ", req.file?.filename);

  const url = req.headers.host;

  res.status(200).send({
    ok: true,
    result: url + "/public/" + req.file?.filename,
  });
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);

    res.status(500).end("error");
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

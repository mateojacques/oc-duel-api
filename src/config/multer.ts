import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import config from "./config";

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } =
  config;

const s3 = new S3Client({
  region: AWS_REGION!,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID!,
    secretAccessKey: AWS_SECRET_ACCESS_KEY!,
  },
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: S3_BUCKET_NAME!,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const uniqueFileName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueFileName);
    },
  }),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
});

export default upload;

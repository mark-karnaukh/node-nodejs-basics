import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream'
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    // Write your code here
    const gZip = zlib.createGzip();
    const readStream = fs.createReadStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'archive.gz'));

    pipeline(readStream, gZip, writeStream, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
    });
};

await compress();
import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream'
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    // Write your code here 
    const gunZip = zlib.createUnzip();
    const readStream = fs.createReadStream(path.resolve(__dirname, 'files', 'archive.gz'));
    const writeStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));

    pipeline(readStream, gunZip, writeStream, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
    });
};

await decompress();
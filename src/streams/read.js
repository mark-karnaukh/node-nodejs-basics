import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { stdout } from 'process';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath);

    readStream.pipe(stdout);
    readStream.on('error', (err) => console.error(err))
};

await read();
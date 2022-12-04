import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { stdin } from 'process';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    // Write your code here
    const writableStream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'));

    stdin.pipe(writableStream);
    stdin.on('error', (err) => {
        writableStream.destroy();

        console.log(err)
    })
};

await write();
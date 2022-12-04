import { createHash } from 'crypto'
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    // Write your code here 
    const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const fileContent = await readFile(filePath, 'utf-8')
                                .then(data => data)
                                .catch(error => console.error(error));


    const hash = createHash('sha256').update(fileContent).digest('hex');

    console.log(hash)
};

await calculateHash();
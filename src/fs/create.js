import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

    let isFileExist;

    await fs.access(filePath, fs.constants.F_OK)
        .then(() => isFileExist = true)
        .catch(() => isFileExist = false);

    if (isFileExist) {
        throw 'FS operation failed'
    } else {
        fs.writeFile(filePath, 'I am fresh and young')
            .catch(err => console.error(err));
    }
};

await create();
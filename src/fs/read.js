import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isLocationExist = async (...pathNames) => {
    const locationPath = path.resolve(__dirname, ...pathNames);

    try {
        await fs.access(locationPath, fs.constants.F_OK)

        return true;
    } catch(err) {
        return false;
    }
}

const read = async () => {
    // Write your code here
    if (!await isLocationExist('files', 'fileToRead.txt')) {
        throw 'FS operation failed';
    } else {
        const data = await fs.readFile(path.resolve(__dirname, 'files', 'fileToRead.txt'), 'utf-8')
                    .then(data => data)
                    .catch(error => console.error(error));

        console.log(data);
    }
};

await read();
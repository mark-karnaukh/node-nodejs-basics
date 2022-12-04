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

const remove = async () => {
    // Write your code here 
    if (!await isLocationExist('files', 'fileToRemove.txt')) {
        throw 'FS operation failed';
    } else {
        fs.unlink(path.resolve(__dirname, 'files', 'fileToRemove.txt'));
    }
};

await remove();
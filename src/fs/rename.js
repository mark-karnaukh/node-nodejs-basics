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

const rename = async () => {
    // Write your code here
    if (!await isLocationExist('files', 'wrongFilename.txt') || await isLocationExist('files_copy', 'properFilename.md')) {
        throw 'FS operation failed';
    } else {
        fs.rename(path.resolve(__dirname, 'files', 'wrongFilename.txt'), path.resolve(__dirname, 'files', 'properFilename.md'))
    }
};

await rename();
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isFolderExist = async (pathName) => {
    const folderPath = path.resolve(__dirname, pathName);

    try {
        await fs.access(folderPath, fs.constants.F_OK)

        return true;
    } catch(err) {
        return false;
    }
}

const list = async () => {
    // Write your code here 
    if (!await isFolderExist('files')) {
        throw 'FS operation failed';
    } else {
        fs.readdir(path.resolve(__dirname, 'files'))
            .then(files => console.log(files))
            .catch(err => console.error(err));
    }
};

await list();
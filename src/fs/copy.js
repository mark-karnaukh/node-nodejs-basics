import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isFolderExists = async (pathName) => {
    const folderPath = path.resolve(__dirname, pathName);

    try {
        await fs.access(folderPath, fs.constants.F_OK)

        return true;
    } catch(err) {
        return false;
    }
}

const copy = async () => {
    // Write your code here
    if (!await isFolderExists('files') || await isFolderExists('files_copy')) {
        throw 'FS operation failed';
    } else {
        fs.readdir(path.resolve(__dirname, 'files'))
            .then(files => {
                return fs.mkdir(path.resolve(__dirname, 'files_copy')).then(() => {
                    return Promise.all(
                        files.map(
                            fileName => fs.copyFile(path.resolve(__dirname, 'files', fileName), path.resolve(__dirname, 'files_copy', fileName)))
                        )
                }).catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }
};

await copy();

import { spawn } from 'child_process'
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node', [path.resolve(__dirname, 'files', 'script.js'), ...args], { stdio: [
        'inherit',
        'inherit',
        'inherit',
        'ipc'
        ]
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 1, true, JSON.stringify({id: 1, value: 'world'})]);

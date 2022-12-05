import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const startNum = 10;
    const numOfCpuCores = os.cpus().length

    const workerThreads = [];

    for (let i = 0; i < numOfCpuCores; i++) {
        workerThreads.push(new Promise((resolve, reject) => {
            const worker = new Worker(path.resolve(__dirname, 'worker.js'), { workerData: { num: startNum + i }});
    
            worker.on('message', (message) => resolve({ status: 'resolved', data: message }));
            worker.on('error', (err) => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
              if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }));
    }

    const result = await Promise.all(workerThreads);

    console.log(result);

    return result;

};

await performCalculations();
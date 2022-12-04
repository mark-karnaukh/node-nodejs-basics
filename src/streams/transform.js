import { stdin, stdout } from 'process';
import { Transform } from 'stream';


const transform = async () => {
    // Write your code here 
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },
    })

    stdin.pipe(reverse).pipe(stdout)
};

await transform();
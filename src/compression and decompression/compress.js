import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';

const compress = (dirState, pathToFile, pathToCompressionFile) => {
    const input = createReadStream(path.join(dirState.currentDir, pathToFile));
    const output = createWriteStream(path.join(dirState.currentDir, pathToCompressionFile));
    const brotli = createBrotliCompress();

    input.pipe(brotli).pipe(output);

    output.on('finish', () => {
        console.log('File compressed with Brotli');
    });

}

export default compress;
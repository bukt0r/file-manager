import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import path from 'path';

const decompress = (dirState, pathToFile, pathToDecompressionFile) => {
    const input = createReadStream(path.join(dirState.currentDir, pathToFile));
    const output = createWriteStream(path.join(dirState.currentDir, pathToDecompressionFile));
    const brotli = createBrotliDecompress();

    input.pipe(brotli).pipe(output);

    output.on('finish', () => {
        console.log('File decompressed with Brotli');
    });

}

export default decompress;
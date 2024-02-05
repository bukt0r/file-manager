import { createReadStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const hash = async (dirState, pathToFile) => {
    
    const filePath = path.join(dirState.currentDir, pathToFile);

        createReadStream(filePath)
        .pipe(crypto.createHash('SHA256'))
        .setEncoding('hex')
        .pipe(process.stdout)
   
};


export default hash; 
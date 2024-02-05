import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';

const cp = async (dirState, part1, part2) => {
    const oldFileName = path.join(dirState.currentDir, part1)
    const newFileName =  path.join(dirState.currentDir, part2)

    const readStream = createReadStream(oldFileName);
    const writeStream = createWriteStream(newFileName);

    readStream.pipe(writeStream);

    await new Promise((resolve, reject)=>{
        writeStream.on('finish', () => {
            writeStream.close();
            readStream.close();
            resolve()
        })
    })

    
    
}

export default cp;
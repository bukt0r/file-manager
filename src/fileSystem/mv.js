import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import fs from 'node:fs/promises'

const mv = async (dirState, part1, part2) => {
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

    await fs.unlink(oldFileName);
   
}

export default mv;
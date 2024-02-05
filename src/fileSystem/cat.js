import { open } from 'node:fs/promises';
import path from 'node:path';
import {pipeline} from 'node:stream/promises'
import fs from 'node:fs'

const cat = async(dirState, fileName) => {
    const filePath = path.join(dirState.currentDir, fileName);

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout)
}

export default cat;
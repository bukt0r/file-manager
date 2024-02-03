import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const up = async (dirState) => {

    if(dirState.currentDir !== os.homedir()) {
        const parentDirectory = path.join(dirState.currentDir, '..');
        dirState.currentDir = parentDirectory
    }
}


export default up;
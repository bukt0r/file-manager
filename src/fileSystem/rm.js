import fs from 'node:fs/promises'
import path from 'node:path';

const rm = async (dirState, removeFileName) => {
    const pathToRemoveFile = path.join(dirState.currentDir, removeFileName);
    await fs.unlink(pathToRemoveFile);
   
}

export default rm;
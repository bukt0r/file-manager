import fs from 'node:fs/promises'
import path from 'node:path';

const rn = async(dirState, part1, part2 ) => {
    const oldFileName = path.join(dirState.currentDir, part1)
    const newFileName =  path.join(dirState.currentDir, part2)
   await fs.rename(oldFileName, newFileName)
}

export default rn;
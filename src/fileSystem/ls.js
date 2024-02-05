import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ls = async (dirState) => {
    const files = await readdir(dirState.currentDir);
    const newFiles = files.map((file)=>{
        return new Promise(async (resolve, reject) => {
            const checkPath = await stat(path.join(dirState.currentDir, file))
            resolve({
                name:file,
                type: checkPath.isDirectory() ? 'directory' : 'file' ,
            }) 
        });
        
    })

    const table = await Promise.all(newFiles)
    
    table.sort((a, b)=> a.type.localeCompare(b.type));
    console.table(table)
    
}

export default ls;
import fs from 'node:fs';
import path from 'node:path';

const add = (dirState, fileName) => {
    const filePath = path.join(dirState.currentDir, fileName)
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.log('Operation failed')
        }  
    })
   
}

export default add;
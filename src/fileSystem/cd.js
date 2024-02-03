import path from 'node:path';

const cd = (dirState, param) => {
   if (!param) {
    console.error('Operation failed')
   } else {
    const nextPath = path.join(dirState.currentDir, `${param}`)
    dirState.currentDir = nextPath;
    
   }
}

export default cd;
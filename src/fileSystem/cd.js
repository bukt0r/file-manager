import path from 'node:path';
import { stat } from 'node:fs/promises';

const cd = async (dirState, param) => {
   if (!param) {
    console.error('Operation failed')
   } else {
      try{
         const nextPath = path.join(dirState.currentDir, param);
         const truePath = await stat(path.join(dirState.currentDir, param));
         dirState.currentDir = nextPath;
      } catch (error) {
         console.error('Operation failed')
      }
    
    
   }
}

export default cd;
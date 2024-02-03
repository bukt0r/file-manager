import os from 'node:os'

export const initialDirectory = () => {
    const initDir = os.homedir();

   console.log(`You are currently in ${initDir}`);

   return {
    currentDir: initDir,
    initDir: initDir
   };
};


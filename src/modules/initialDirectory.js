import os from 'node:os'

    const initialDirectory = () => {
    const initDir = os.homedir();

   console.log(`You are currently in ${initDir}`);

   return {
    currentDir: initDir,
    initDir: initDir
   };
};

export default initialDirectory;
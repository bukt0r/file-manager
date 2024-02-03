import process from 'process';
import { initialDirectory } from './src/modules/initialDirectory.js';
import commandHandler from './src/modules/commandHandler.js'


const start = async () => {
    const name = () => {
        const indexName = process.argv.join('').split('=');
        const username = indexName[1]
    
        if (!username) {
        console.error('Error: Username not provided. Please use --username=your_username.');
        process.exit(1);
        }
    
    console.log(`Welcome to the File Manager, ${username}!`);
    
    };
    name();
    const dirState = initialDirectory();
    console.log(dirState.initDir)
    await commandHandler(dirState);
};

await start();

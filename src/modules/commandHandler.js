import readline from 'node:readline/promises'
import up from '../fileSystem/up.js'
import cd from '../fileSystem/cd.js'


const commandHandler = async (dirState) => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      }); 

    const cmd = await rl.question('');
    const parts = cmd.split(' ')

    switch (parts[0]) {
        case 'up': 
            await up(dirState);
            break;
        case 'cd':
            cd(dirState, parts[1]);
            break;
        case 'ls': 
            console.log('list_of_files');
            break;
        case 'cat': 
            console.log('path_to_file');
            break;
        case 'add': 
            console.log('new_file_name');
            break;
        case 'rn': 
            console.log('path_to_file new_filename');
            break;
        case 'cp': 
            console.log('path_to_file path_to_new_directory');
            break;
        case 'mv': 
            console.log('path_to_file path_to_new_directory');
            break;
        case 'rm': 
            console.log('path_to_file');
            break;
        default: 
            console.log('Danger, danger... Error.');
            break;
    };

    rl.close()
    console.log(`You are currently in ${dirState.currentDir}`)
    commandHandler(dirState);

};

export default commandHandler;
    
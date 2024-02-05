import readline from 'node:readline/promises'
import up from '../fileSystem/up.js'
import cd from '../fileSystem/cd.js'
import ls from '../fileSystem/ls.js'
import cat from '../fileSystem/cat.js'
import add from '../fileSystem/add.js'
import rn from '../fileSystem/rn.js'
import cp from '../fileSystem/cp.js'
import mv from '../fileSystem/mv.js'
import rm from '../fileSystem/rm.js'
import os from '../os/os.js'
import hash from '../hash/hash.js'


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
            await cd(dirState, parts[1]);
            break;
        case 'ls': 
            await ls(dirState)
            break;
        case 'cat': 
            await cat(dirState, parts[1]);
            break;
        case 'add': 
            await add(dirState, parts[1]);
            break;
        case 'rn': 
            await rn(dirState, parts[1], parts[2]);
            break;
        case 'cp': 
            await cp(dirState, parts[1], parts[2]);
            break;
        case 'mv': 
            await mv(dirState, parts[1], parts[2]);
            break;
        case 'rm': 
            await rm(dirState, parts[1]);
            break;
        case 'os':
            await os(parts[1]);
            break;
        case 'hash':
            console.log('1');
            break;
        case 'compress':
            console.log('1');
            break;
        case 'decompress':
            console.log('1');
            break;
        default: 
            console.log('Invalid input');
            break;
    };

    rl.close()
    console.log(`You are currently in ${dirState.currentDir}`)
    commandHandler(dirState);

};

export default commandHandler;
    
import os from 'node:os'

const osCommand = (command) => {
    switch(command) {
        case '--EOL':
            const eol = os.EOL;
            eol.split('\\').join('\\\\');
            console.log(eol);
            break;
        case '--cpus':
            const cpus = os.cpus()
            console.log(cpus[0].model, `${cpus.length} cores`)
            break;
        case '--homedir':
            console.log(os.homedir());
            break;
        case '--username':
            console.log(os.userInfo().username);
            break;
        case '--architecture':
            console.log(os.arch());
            break;

    }
}

export default osCommand;
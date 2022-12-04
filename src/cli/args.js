const parseArgs = () => {
    // Write your code here 
    const consoleArgs = process.argv;
    const propNames = consoleArgs.filter(arg => arg.startsWith('--'));

    console.log(propNames.map(propName => {
        const propValue = consoleArgs[consoleArgs.indexOf(propName) + 1]

        return `${propName.replace('--', '')} is ${propValue}`
    }).join(', '))
};

parseArgs();
const parseEnv = () => {
    // Write your code here 
    console.log(Object.entries(process.env)
        .filter(([propName, _]) => propName.startsWith('RSS_'))
        .map((entry) => entry.join('='))
        .join('; ')
    )
};

parseEnv();
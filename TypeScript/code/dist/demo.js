Promise.resolve('hello ')
    .then(res => res + 'lagou ') 
    .then(res => { 
        setTimeout(() => 
        { console.log(res + 'I 💗 U') 
    }, 30) }
    )
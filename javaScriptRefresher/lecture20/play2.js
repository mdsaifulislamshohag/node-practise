/*
setTimeout(() => {
    console.log("I am a asynchronus function to be executed ");
}, 2000);

console.log("I am sychronus function to be executed before asynchronus function ");

*/

/*

const fetchData = callback => {
    setTimeout(() => {
        callback("Done");
    }, 1500);
}



setTimeout(() => {
    console.log("Timer is done");
    fetchData((t) => { console.log(t); });
}, 2000);

*/

/*
///.................promise & callback together.....

const fetchData = (callback) => {
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
            callback('abc');
        }, 1500);
    });
    return pro;

};
setTimeout(() => {
    console.log("time is done");
    fetchData((t) => { console.log(t); }).then(
            (text) => {
                console.log(text);
                return fetchData((t) => { console.log(t); })
            }
        )
        .then(
            (text1) => {
                console.log(text1);
                return fetchData((t) => { console.log(t); })
            }
        )
        .then(
            (text) => {
                console.log(text);
                return fetchData((t) => { console.log(t); })
            }
        )
        .then(
            (text) => { console.log(text); }
        )

}, 2000)

*/

/*

//..........only callback......
const fetchData = (callback) => {
    setTimeout(() => {
        callback("done");
    }, 1500);
}

setTimeout(() => {
    console.log('aaaaaaa.......');
    fetchData((t) => { console.log(t) });

}, 2000);

*/



/*

//..... promises........

const fetchData = () => {
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('saifuilla')
        }, 1500)
    })
    return pro;
}

setTimeout(() => {
    console.log('hello !')
    fetchData().then((t) => {
            console.log(t);
            return fetchData();
        })
        .then((t1) => {
            console.log(t1);
            return fetchData();
        })
        .then((t2) => {
            console.log(t2);

        })
}, 2000)

*/
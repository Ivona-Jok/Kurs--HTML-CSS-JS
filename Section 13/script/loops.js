

for (let i = 0; i < 10 ; i++) {
    console.log(i);
}


const users = ['Ivona', 'Max', 'Jane'];
    for (const user of users) {
        console.log(user);
    }


const loggedInUser = {
    name: 'Ivona',
    age: 17,
    isAdmin: true
};
    for (const propretyName in loggedInUser){
        console.log(propretyName);
        console.log(loggedInUser[propretyName]);
    }


let isFinished = false;
    while (!isFinished) {
        isFinished = confirm('Do you want to quit?');
    }
    console.log('Done!')
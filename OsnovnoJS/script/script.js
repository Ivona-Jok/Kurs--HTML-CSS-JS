
let name = 'Ivona';
let age = 17;
let hobbies = ['Sports' , 'Reading' , 'Drawing'];

let job = { 
    title: 'Developer' , 
    place: 'Podgorica' , 
    salary: 5000
};

let adultYears
    function calculateAdultYears(age) {
        let result;
        result = age - 18;
        return result;
    }
    adultYears = calculateAdultYears(age);
    console.log(calculateAdultYears);



let person = {
    personName: "Ivona" ,               //proprety
    greet() {                           //method
        console.log('Hello!');
    }
};
    person.greet();

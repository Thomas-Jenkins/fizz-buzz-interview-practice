// For this assignment I know I will need a for loop to check each number from 1 to 100. I will need three functions, One to check if the number is divisable by
// 3 which will result in fizz being printed to the screen, one to check if the number is divisable by 5 which will result in buzz being printed to the screen 
// and finally one to check if the number is divisable by both 3 and 5 which will result in fizzbuzz being printed tot he screen. If none of those are true, then 
// the number itself will be printed tot he screen.

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log('fizz');
//     }
//     if (i % 5 === 0) {
//         console.log('buzz');
//     }
//     if (i % 3 === 0 && i %5 === 0) {
//         console.log('fizzbuzz')
//     }
//     if (i % 3 !== 0 && i %5 !== 0) {
//         console.log(i);
//     }

// }

//The  above code resulted in an error in the expected functionality, due to the fact of 0 satisfying all of the if statements. To fix this expediently I will make the following changes, though if time allow I will implement a more streamlined approach.

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i !== 0) {
        console.log('fizz');
    }
    if (i % 5 === 0 && i !== 0) {
        console.log('buzz');
    }
    if (i % 3 === 0 && i %5 === 0 && i !== 0) {
        console.log('fizzbuzz')
    }
    if (i % 3 !== 0 && i %5 !== 0) {
        console.log(i);
    }

}
// The addition of the && clause to the code has solved the above issue. 



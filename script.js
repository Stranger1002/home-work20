// function filterArray(array) {
//     let emails = {
//         org: [],
//         net: [],
//         info: []
//     }

//     array.forEach(user => {
//         const email = user.email;

//         const vila = email.split('.')[1];

//         if (vila === 'org') {
//             emails.org.push(user);
//         } else if (vila === 'net') {
//             emails.net.push(user);
//         } else if (vila === 'info') {
//             emails.info.push(user);
//         }
//     });

//     return emails;
// }

// function fibonnaci (num) {
//     const a = [0, 1];

//     for (let i = 0; i < num; i++) {
//         a.push(a[i + 1] + a[i]);
//     }

//     return a[num - 1];
// }

// console.log(fibonnaci(50));


let lastName = 'Siddikov'
let firstName = 'Ozod'

let email = EmailGenerator(firstName, lastName)

console.log(email)

function EmailGenerator(lastName, firstName) {
    firstName = firstName.trim().toLowerCase()
    lastName = lastName.trim().toLowerCase()
    let arr = '@email.com';
    let email = `${firstName}.${lastName}.${arr}`
    return email
}

function generateid() {
    let arr2 = 'qwertyuiopasdfghjklzxcvbnm'
    let arr3 = ""
    for (let a = 0; a < 2; a++) {
        arr3 += arr2.charAt(Math.floor(Math.random() * arr2.length))
    }
    let num = Math.floor(Math.random() * 100000)
    const id = `${arr3}${num}`
    console.log(id)
}
generateid()
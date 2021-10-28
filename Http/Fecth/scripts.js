// fetch(url)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error("HTTP Error, status =" + res.status);
//         }
//         return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(e => console.error(e))

// async function fetchData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
// fetchData(url);

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({"id":4, "title":"hello", "author":"shawn"})
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// // async function postData(url, data) {
// //     const config = {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         redirect: 'follow',
// //         body: JSON.stringify(data)
// //     }
// //     const res = await fetch(url, config);
// //     return res.json();
// // }

let url = 'http://localhost:3000/users';
const data = {
    id: 1000,
    first_name: "Shawn",
    last_name: "Liu",
    email: "jiahaoliu1891@gmail.com"
}

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}

fetch(url, config)
    .then(res => {
        console.log(res)
    })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    })
    .catch(err => console.error('POST Data Error:  ' + err));
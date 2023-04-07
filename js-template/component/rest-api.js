// Fetch api to make the rest call
let data = [];
console.log('1');
async function fetchPosts() {
    console.log('2');
     data = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(datajson => datajson);

    console.log(data);
    console.log('3');
    
}

fetchPosts();
console.log('4');
console.log(data);



// why to write Arrow function
// const fetchPosts = async () => {
//     console.log('2');
//      data = await fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(res => res.json())
//                 .then(datajson => datajson);

//     console.log(data);
//     console.log('3');
// }

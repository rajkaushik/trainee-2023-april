// Fetch api to make the rest call
let data = [];
async function fetchPosts() {
     data = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
                .then(res => res.json())
    console.log(data);
}
fetchPosts();

// handle error if occured! ==========
// function fetchPosts() {
//     fetch('https://jsonplaceholder.typicode.com/post?limit=10')
//     .then((res) => {
//         if(res.ok){
//             return res.json();
//         }
//         throw new Error('Something went wrong')
//     })
//     .then(responseJson => console.log(responseJson))
//     .catch(error => {
//         console.log(error);
//     })     
// }
fetchPosts();


// why to write Arrow function ==========
// const fetchPosts = async () => {
//     console.log('2');
//      data = await fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(res => res.json())
//                 .then(datajson => datajson);

//     console.log(data);
//     console.log('3');
// }

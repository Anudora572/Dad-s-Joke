const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


//using async await

const generateJokes = async () =>{

    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();  //to convert the html format of the data in json format
        
        jokes.innerHTML = data.joke;
    } catch(err){
        console.log(`Error is ${err}`);
    }
}

//using Promises
// const generateJokes = () =>{
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((result) => result.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     }) 
// }

jokeBtn.addEventListener('click', generateJokes);
generateJokes();
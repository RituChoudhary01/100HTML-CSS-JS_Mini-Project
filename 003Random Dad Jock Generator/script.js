// https://icanhazdadjoke.com/

// Attach a click event listener to the button with id 'btn'
document.getElementById('btn').addEventListener('click', joke);

// Define an asynchronous function to fetch a random joke from the API
async function joke(){
    // Configure headers for the fetch request
    let config = {
        headers: {
            Accept: "application/json",  // We expect the response in JSON format
        },
    };

    try {
        // Fetch data from the joke API
        let response = await fetch("https://icanhazdadjoke.com/", config);

        // Check if the response is successful
        if (response.ok) {
            let data = await response.json();  // Parse the response as JSON
            document.getElementById("content").innerHTML = data.joke; // Display the joke in the HTML element with id 'content'
        } else {
            throw new Error("Failed to fetch joke.");
        }
    } catch (error) {
        // Handle any errors that occur during the fetch or JSON parsing
        console.error(error);
        document.getElementById("content").innerHTML = "Oops! Something went wrong.";
    }
}

// document.getElementById('btn').addEventListener('click',joke);
// async function joke(){
//     let config ={
//         headers:{
//             Accept:"application/json",
//         },
//     };
//     let a = await fetch("https://icanhazdadjoke.com/",config);
//     let b = await a.json();
//     document.getElementById("content").innerHTML = b.joke;
// }
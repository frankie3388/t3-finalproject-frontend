// Asynchronous function to perform user login. Expects email and password as parameters
async function login(email, password){ 
    const publicUrl = "https://travelling-diary-app-e5215403a509.herokuapp.com";

    // Sending a POST request to the server to perform user login
    let result = await fetch(
      // need to change this to 'api' from ApiContext once in production
      publicUrl + "/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    );

    // Parsing the response data
    let data = await result.json();
    // Returning the data received from the server
    return data;

  }

module.exports = {login}
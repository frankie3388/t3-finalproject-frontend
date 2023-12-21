async function login(email, password){ 
    const publicUrl = "https://travelling-diary-app-e5215403a509.herokuapp.com";

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

    let data = await result.json();
    
    return data;

  }

module.exports = {login}
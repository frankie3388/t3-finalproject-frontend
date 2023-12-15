async function login(email, password){ 

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
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
async function create(username, password){ 
    console.log(username, password);

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password}),
      }
    );

    let data = await result.json();

    // Need to get rid of this, just leaving it in to see that it works
    console.log(data);

    return data;

  }

module.exports = {create}
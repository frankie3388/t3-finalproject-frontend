async function create(email, password){ 
    console.log(email, password);

    let result = await fetch(
      process.env.BACKEND_URL_PUBLIC + "/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      }
    );

    let data = await result.json();

    // Need to get rid of this, just leaving it in to see that it works
    console.log(data);

    return data;

  }

module.exports = {create}
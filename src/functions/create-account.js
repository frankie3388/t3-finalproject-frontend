async function create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin=false){ 
    console.log(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin);

    let result = await fetch(
      process.env.BACKEND_URL_PUBLIC + "/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          regionsOfInterest: regionsOfInterest,
          countriesOfInterest: countriesOfInterest,
          isadmin: isAdmin
        }),
      }
    );

    let data = await result.json();

    // Need to get rid of this, just leaving it in to see that it works
    console.log(data);

    return data;

  }

module.exports = {create}
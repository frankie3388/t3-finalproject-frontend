async function create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin=false){ 
    console.log(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin);

    const publicUrl = "https://travelling-diary-app-e5215403a509.herokuapp.com";

    let result = await fetch(
      // need to change this to 'api' from ApiContext once in production
      publicUrl + "/users/createuser",
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
          isAdmin: isAdmin
        }),
      }
    );

    let data = await result.json();

    // Need to get rid of this, just leaving it in to see that it works
    console.log(data);

    return data;

  }

module.exports = {create}
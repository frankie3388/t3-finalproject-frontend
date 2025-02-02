// Asynchronous function to create a new user. Expects 8 parameters.
async function create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest, isAdmin=false){ 
  let apiUrl;

  // Check if the app is running in development mode
  if (process.env.NODE_ENV === 'development') {
    // Use the localhost server for development
    apiUrl = 'http://localhost:5000'; // Replace with your actual local server port
  } else {
    // Use the production server for other environments
    apiUrl = 'https://forked-travelling-diary-a7e4a987a53d.herokuapp.com';
  }

    // Sending a POST request to the server to create a new user
  let result = await fetch(
    apiUrl + "/users/createuser",
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
  console.log(data);
  return data;

}

module.exports = {create}
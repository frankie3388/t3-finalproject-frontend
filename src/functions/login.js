// Asynchronous function to perform user login. Expects email and password as parameters
async function login(email, password) {
  let apiUrl;

  // Check if the app is running in development mode
  if (process.env.NODE_ENV === 'development') {
    // Use the localhost server for development
    apiUrl = 'http://localhost:5000'; // Replace with your actual local server port
  } else {
    // Use the production server for other environments
    apiUrl = 'https://forked-travelling-diary-a7e4a987a53d.herokuapp.com';
  }

  // Sending a POST request to the server to perform user login
  let result = await fetch(
    // need to change this to 'api' from ApiContext once in production
    apiUrl + '/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    }
  );

  // Parsing the response data
  let data = await result.json();
  // Returning the data received from the server
  return data;
}

module.exports = { login };

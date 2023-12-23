import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AuthProvider from './context/AuthContext';
import CreateAccountForm from './components/CreateAccountForm';
import CreateBlogForm from './components/CreateBlogForm';
import ApiProvider from './context/ApiContext';


// This test checks if the LoginForm component is rendering
test('renders login form', () => {
  render(
    <AuthProvider>
      <Router>
        <LoginForm />
      </Router>
    </AuthProvider>
    
  );

  const emailLabel = screen.getByTestId("email-test");
  expect(emailLabel).toBeInTheDocument();

  const passwordLabel = screen.getByTestId("password-test");
  expect(passwordLabel).toBeInTheDocument();

  const signInButton = screen.getByText("Sign in");
  expect(signInButton).toBeInTheDocument();

  const createAccountLink = screen.getByText("Create Account");
  expect(createAccountLink).toBeInTheDocument();
});

// This test checks to see if the Sign in button can be clicked and the
// message in the useEffect hook "JWT value is:" is returned in console.log
test("can click on login and return jwt in console.log", async () => { 
  // Spy on console.log
  const consoleSpy = jest.spyOn(console, 'log');

  render(
    <AuthProvider>
      <Router>
        <LoginForm />
      </Router>
    </AuthProvider>
  );

  const loginButton = screen.getByText("Sign in");

  await fireEvent(
    loginButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  // Wait for the asynchronous operation to complete
  // Perform assertions based on the changes caused by the login process
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("JWT value is"));

  // Clean up the spy
  consoleSpy.mockRestore();
})


// beforeEach(() => {
//   fetchMock.enableMocks();
// });

// afterEach(() => {
//   fetchMock.resetMocks();
// });

// test("login function gets jwt", async () => {
//   // Mock the fetch function to return a specific response
//   fetchMock.mockResponseOnce(JSON.stringify({ jwt: "true" }));

//   // Call the login function
//   let result = await login("admin@example.com", "password1");

//   // Assert that the result contains a truthy jwt property
//   expect(result.jwt).toBeTruthy();

//   // Assert that fetch was called with the expected parameters
//   await expect(fetchMock).toHaveBeenCalledWith(
//     'https://travelling-diary-app-e5215403a509.herokuapp.com/users/login',
//     {
//       method: 'POST',q
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: "admin@example.com",
//         password: "password1",
//       }),
//     }
//   );
// });

// This test checks if the CreateAccountForm component is rendering
test('renders create account form', () => {
  render(
    <AuthProvider>
      <Router>
        <CreateAccountForm />
      </Router>
    </AuthProvider>
    
  );

  const emailLabel = screen.getByTestId("email-test");
  expect(emailLabel).toBeInTheDocument();

  const passwordLabel = screen.getByTestId("password-test");
  expect(passwordLabel).toBeInTheDocument();

  const firstNameLabel = screen.getByTestId("firstName-test");
  expect(firstNameLabel).toBeInTheDocument();

  const lastNameLabel = screen.getByTestId("lastName-test");
  expect(lastNameLabel).toBeInTheDocument();

  const usernameLabel = screen.getByTestId("username-test");
  expect(usernameLabel).toBeInTheDocument();

  const regionsOfInterestLabel = screen.getByTestId("regionsOfInterest-test");
  expect(regionsOfInterestLabel).toBeInTheDocument();

  const countriesOfInterestLabel = screen.getByTestId("countriesOfInterest-test");
  expect(countriesOfInterestLabel).toBeInTheDocument();

  const createAccountButton = screen.getByText("Create");
  expect(createAccountButton).toBeInTheDocument();

  const loginLink = screen.getByText("Login");
  expect(loginLink).toBeInTheDocument();
});


// This test checks to see if the Create button can be clicked and the
// message in the useEffect hook "Created account:" is returned in console.log
test("can click on create and return created account in console.log", async () => { 
  // Spy on console.log
  const consoleSpy = jest.spyOn(console, 'log');

  render(
    <AuthProvider>
      <Router>
        <CreateAccountForm />
      </Router>
    </AuthProvider>
  );

  const createButton = screen.getByText("Create");

  await fireEvent(
    createButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  // Wait for the asynchronous operation to complete
  // Perform assertions based on the changes caused by the login process
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Created account:"));

  // Clean up the spy
  consoleSpy.mockRestore();
})


// This test checks if the CreateBlogForm component is rendering
test('renders create blog form', () => {
  render(
    <AuthProvider>
      <ApiProvider>
        <Router>
          <CreateBlogForm />
        </Router>
      </ApiProvider>
    </AuthProvider>
    
  );

  const titleOfBlogLabel = screen.getByTestId("title-test");
  expect(titleOfBlogLabel).toBeInTheDocument();

  const locationNameLabel = screen.getByTestId("locationName-test");
  expect(locationNameLabel).toBeInTheDocument();

  const locationAddressLabel = screen.getByTestId("locationAddress-test");
  expect(locationAddressLabel).toBeInTheDocument();

  const locationCityLabel = screen.getByTestId("locationCity-test");
  expect(locationCityLabel).toBeInTheDocument();

  const locationCountryLabel = screen.getByTestId("locationCountry-test");
  expect(locationCountryLabel).toBeInTheDocument();

  const descriptionLabel = screen.getByTestId("description-test");
  expect(descriptionLabel).toBeInTheDocument();

  const photoLabel = screen.getByTestId("photo-test");
  expect(photoLabel).toBeInTheDocument();

  const postButton = screen.getByText("Post");
  expect(postButton).toBeInTheDocument();
});


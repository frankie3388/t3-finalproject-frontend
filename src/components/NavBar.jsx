import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/NavBar.css'
import { useLocation } from 'react-router-dom'; // React Router hook for accessing current location
import { NavLink } from "react-router-dom"; // React Router component for navigation
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// This is the functional component for the Navigation component. It is 
// responsible for redirecting to other pages via clicking on the links.
function NavBar() {
    // This logOut function sets the AuthContextProvider to null, so that
    // when the logout button is clicked, the AuthContextProvider won't
    // have a jwt value.
    const { logoutJwt } = useContext(AuthContext);

    // Inline style for active navigation link
    let activeNavStyle = {
        textDecorationThickness: 4,
        textDecorationColor: "white",
        textDecorationLine: "underline"
    }

    // This hook ensures that the Navbar component checks the path location
    const { pathname } = useLocation();

    // Do not render the Navbar on the Login and Create Account pages
    if (pathname === '/' || pathname === '/createaccount') {
        return null;
    }

    // Function to handle logout
    const handleLogout = () => {
        // Call the logoutJwt function when the "Log Out" link is clicked
        logoutJwt();
      };

    return (
        <Row xs={4} className="navbar-container">
            <Col className="navbar-item">
                <NavLink className="navbar-link" onClick={handleLogout} to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6 data-testid="logOut-test">Log Out</h6>
                </NavLink>
            </Col>
            {/* <Col className="navbar-item">
                <NavLink className="navbar-link" to="/dashboard" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Dash Board</h6>
                </NavLink>
            </Col> */}
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/bloglist" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Blog List</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/createblog" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Create Blog</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/userprofile" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>User Profile</h6>
                </NavLink>
            </Col>
        </Row>
    )
}

export default NavBar;
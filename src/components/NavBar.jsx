import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/NavBar.css'
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavBar() {

    const { logoutJwt } = useContext(AuthContext);

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
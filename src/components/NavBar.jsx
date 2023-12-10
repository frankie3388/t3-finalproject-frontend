import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/NavBar.css'
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function NavBar() {

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

    return (
        <Row xs={5} className="navbar-container">
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Log Out</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/dashboard" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Dash Board</h6>
                </NavLink>
            </Col>
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
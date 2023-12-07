import Card from 'react-bootstrap/Card';
import UserProfileForm from '../components/UserProfileForm';
import '../styling/UserProfilePage.css';

function UserProfile() {
    return (
        <div className="userprofile-container">
            <Card.Img src="https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h3>UserName</h3>
            <UserProfileForm />
        </div>
    )
}

export default UserProfile;
import Container from 'react-bootstrap/Container';
import BlogCard from '../components/BlogCard';
import SmallBlogCard from '../components/SmallBlogCard';
import { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";

function Dashboard() {

    // api URL 
	const {api} = useContext(ApiContext);

    useEffect(() => {
        console.log("Card search component has mounted! Making a fetch request now...");
    
        async function apiRequest() {
            
          try {
            let response = await fetch(api);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            let responseData = await response.json();
            console.log(responseData);
          } catch (error) {
            console.error("Error during fetch:", error);
          }
        }
    
        apiRequest();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <Container>
            <h2>User's Dashboard</h2>
            <h4>User's Blogs</h4>
            <BlogCard />
            <h4>Suggested Blogs</h4>
            <SmallBlogCard />
            <h4>Suggested Blogs</h4>
            <SmallBlogCard />
        </Container>
    )
}

export default Dashboard;
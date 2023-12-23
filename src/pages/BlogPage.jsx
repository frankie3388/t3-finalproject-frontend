import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import '../styling/BlogPage.css';
import BlogDetails from '../components/BlogDetails';
import LikeEditDeleteBlog from '../components/LikeEditDeleteBlog';
import CommentsSection from '../components/CommentsSection';
import GoogleMaps from '../components/GoogleMaps';
import { useParams } from 'react-router-dom';
import { ApiContext } from "../context/ApiContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Blog() {
    // id used as parameter from the BlogCard.jsx file
    const { id } = useParams();

    // store blogs in useState
    const [blogs, setBlogs] = useState(null)

    const [loading, setLoading] = useState(true); // Add loading state

    // api URL 
    const {api} = useContext(ApiContext);

    // jwt token 
	const {jwt} = useContext(AuthContext);
 
    useEffect(() => {
        console.log("Card search component has mounted! Making a fetch request now...");

        async function apiRequest(){
            try {
                let response = await fetch(api + "/blog/" + id, {
                   method: "GET",
                   headers: {
                     "Authorization": jwt
                   }
               });
          
                if (!response.ok) {
                   throw new Error(`HTTP error! Status: ${response.status}`);
                }
          
                let responseData = await response.json();
                console.log("Fetched data:", responseData);
                setBlogs(responseData.Blog);
                setLoading(false); // Set loading state to false after receiving blogs
                console.log(responseData.Blog);
             } catch (error) {
                console.error("Error fetching blogs:", error);
             }
        }

        apiRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container fluid className="blogpage-container">
            <Row className="">
                <Col>
                <h2 className="blogpage-title">Blog Page</h2>
                </Col>
            </Row>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                {blogs && (
                    <BlogDetails 
                        id={blogs._id}  // Make sure to include a unique key for the single item
                        username={blogs.user.username}
                        title={blogs.title}
                        location={blogs.locationcity}
                        description={blogs.body}
                        image={blogs.imageUrl}
                    />
                )}
                {blogs && (
                    <LikeEditDeleteBlog 
                        blogId={blogs._id}
                        userId={blogs.user._id}
                    />
                )}    
                </>
            )}
               
            {/* <CommentsSection />
            <GoogleMaps /> */}
            <NavBar />  
        </Container>
    )
}

export default Blog;
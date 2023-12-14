import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../styling/BlogListPage.css';
import SmallBlogCard from '../components/SmallBlogCard';
import BlogCard from '../components/BlogCard';
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useParams } from "react-router-dom";



function BlogListByUsername() {
    // search results 
	const [searchResults, setSearchResults] = useState([]);

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the username 
	const {username} = useParams();

	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest(){
			// let queryParams = new URLSearchParams({
			// 	q: 'locationname:' + location
			// })
			let response = await fetch(api + "/blogs/username");

			let responseData = await response.json();

			setSearchResults(responseData.data);
			console.log(searchResults)
		}

		apiRequest();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username]);

    return (
        <Container fluid className="blog-list-container">
            <Row className="title-container">
                <Col>
                <h2 className="bloglist-title">Blog List - {username}</h2>
                </Col>
            </Row>
            <BlogCard />
            <SmallBlogCard />
        </Container>
    )
}

export default BlogListByUsername;
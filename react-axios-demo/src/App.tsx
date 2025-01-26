import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './types/Post';
import './App.css';

function App() {
  // State Management
  // posts: array to store fetched posts
  const [posts, setPosts] = useState<Post[]>([]);
  // loading: boolean to track loading state
  const [loading, setLoading] = useState(true);
  // error: string to store error messages if any
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Async function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        // Making GET request using Axios
        // The type parameter <Post[]> ensures type safety for the response data
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        
        // Update state with the fetched posts
        setPosts(response.data);
        
        // Set loading to false as data fetching is complete
        setLoading(false);
      } catch (err) {
        // Handle any errors that occur during the request
        setError('Failed to fetch posts. Please try again later.');
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchPosts();
  }, []); // Empty dependency array means this effect runs once on mount

  // Conditional rendering based on state
  // Show loading state while fetching data
  if (loading) return <div className="loading">Loading posts...</div>;
  
  // Show error message if something went wrong
  if (error) return <div className="error">{error}</div>;

  // Main render when data is loaded successfully
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Axios Tutorial</h1>
        <p>Fetching data from JSONPlaceholder API</p>
      </header>
      <main className="posts-container">
        {/* Map through posts array to render each post */}
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="post-footer">
              <span>Post ID: {post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState, useRef } from "react"

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const loaderRef = useRef(null);

   // Simulated API call to fetch posts
   const fetchPosts = async (page) => {
    try {
      // Replace this with your real API endpoint
      const response = await fetch(`https://dummyjson.com/posts?page=${page}`);
      const data = await response.json();

      if (data.posts.length === 0) {
        setHasMore(false); // No more posts to fetch
      } else {
        setHasMore(true);
        setPosts((prev) => [...prev, ...data.posts]); // Append new posts to the list
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Observe when the loader is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setPage((prev) => prev + 1); 
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  // Fetch posts whenever the page changes
  useEffect(() => {
    fetchPosts(page);
  }, [page]);

    
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {/* Loader */}
      {hasMore && (
        <div
          ref={loaderRef}
          style={{
            height: "50px",
            textAlign: "center",
            background: "#f0f0f0",
          }}
        >
          <p>Loading more posts...</p>
        </div>
      )}
      {!hasMore && <p>No more posts to load!</p>}
    </div>
  )
}
  
  export default Home
  
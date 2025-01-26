import React from "react";
// Import necessary React Query hooks and components
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
// Import our UI components
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

// Initialize the Query Client - this manages all queries and mutations
const queryClient = new QueryClient();

// Simulated API fetch function to get posts from JSONPlaceholder
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// Posts component that handles fetching and displaying the posts
function Posts() {
  // Use the useQuery hook to fetch and manage data
  // queryKey: unique identifier for this query
  // queryFn: function that fetches the data
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  // Show loading state while data is being fetched
  if (isLoading) return <p>Loading...</p>;
  
  // Show error state if fetch failed
  if (error) return <p>Error: {error.message}</p>;

  return (
    // Grid layout that's responsive at different breakpoints
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Map through first 10 posts and display them in cards */}
      {data.slice(0, 10).map((post) => (
        <Card key={post.id} className="hover:shadow-xl transition">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </CardContent>
        </Card>
      ))}
      {/* Button to manually refetch data */}
      <div className="mt-4">
        <Button onClick={refetch}>Refetch Data</Button>
      </div>
    </div>
  );
}

// Main App component
export default function App() {
  return (
    // Wrap the app with QueryClientProvider to enable React Query
    <QueryClientProvider client={queryClient}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">React Query Demo</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

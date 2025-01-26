import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const queryClient = new QueryClient();

// Simulated API fetch function
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function Posts() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.slice(0, 10).map((post) => (
        <Card key={post.id} className="hover:shadow-xl transition">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </CardContent>
        </Card>
      ))}
      <div className="mt-4">
        <Button onClick={refetch}>Refetch Data</Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">React Query Demo</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

// Define the structure of data we expect from the API
// This interface matches the JSON structure from jsonplaceholder API
export interface Post {
  userId: number;  // ID of the user who created the post
  id: number;      // Unique identifier for the post
  title: string;   // Title of the post
  body: string;    // Content of the post
} 
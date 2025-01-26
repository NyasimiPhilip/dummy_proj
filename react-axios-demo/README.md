# React Axios Tutorial

This project demonstrates how to use Axios with React and TypeScript to fetch and display data from an API.

## Features

- Data fetching with Axios
- TypeScript integration for type safety
- Loading states and error handling
- Responsive design

## Prerequisites

Before starting, ensure you have:
- Node.js installed (v14 or higher)
- npm or yarn package manager
- Basic understanding of React and TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Core Concepts

### 1. TypeScript Interface
TypeScript interfaces help us define the shape of our data. In this project, we define a Post interface that matches the structure of the data from our API:

```typescript
interface Post {
  userId: number;  // ID of the user who created the post
  id: number;      // Unique identifier for the post
  title: string;   // Title of the post
  body: string;    // Content of the post
}
```

This interface:
- Ensures type safety when working with API data
- Provides better IDE support with autocompletion
- Catches potential errors at compile time

### 2. Axios GET Request
Axios is a promise-based HTTP client. Here's how we use it to fetch data:

```typescript
// Making a GET request with type safety
const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

// The response.data will be typed as Post[]
const posts: Post[] = response.data;
```

Key points:
- We use TypeScript generics (`<Post[]>`) to type the response data
- Axios automatically transforms the JSON response
- Error handling is done through try/catch blocks

### 3. State Management
We use React's useState hook to manage three pieces of state:

```typescript
// Store the fetched posts
const [posts, setPosts] = useState<Post[]>([]);

// Track loading state
const [loading, setLoading] = useState(true);

// Handle potential errors
const [error, setError] = useState<string | null>(null);
```

This pattern allows us to:
- Track the loading state to show loading indicators
- Store and update the fetched data
- Handle and display error messages
- Provide a smooth user experience

## Project Structure

```
src/
  ├── types/
  │   └── Post.ts         # TypeScript interfaces
  ├── App.tsx            # Main component with Axios implementation
  ├── App.css           # Styles
  ├── App.test.tsx      # Unit tests
  └── index.tsx         # Entry point
```

## Key Concepts

### 1. TypeScript Interface
```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

### 2. Axios GET Request
```typescript
const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
```

### 3. State Management
```typescript
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
```


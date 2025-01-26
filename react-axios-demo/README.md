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


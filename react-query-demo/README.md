# React Query Tutorial Demo

This project demonstrates how to use React Query (TanStack Query) for efficient data fetching and state management in React applications.

## Project Setup

1. First, create a new React project:

```bash
npx create-react-app react-query-demo
cd react-query-demo
```

2. Install the necessary dependencies:

```bash
npm install @tanstack/react-query
npm install tailwindcss
npm install @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
```

3. Install dev dependencies for Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
```

4. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

## Project Structure

The project includes several key components:

- `src/App.js`: Main application component with React Query implementation
- `src/components/ui/`: UI components (Button, Card)
- `src/lib/utils.js`: Utility functions for styling
- Configuration files for Tailwind CSS

## Key Features

1. **React Query Setup**
- QueryClient configuration
- QueryClientProvider wrapper
- Basic query implementation

2. **Data Fetching**
- Fetching posts from JSONPlaceholder API
- Loading and error states
- Data refetching capability

3. **UI Components**
- Responsive grid layout
- Card components for posts
- Styled button for refetch action

## Code Examples

### Basic Query Implementation

```jsx
const { data, isLoading, error, refetch } = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
});
```

### Handling Loading and Error States

```jsx
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
```

## Running the Application

1. Start the development server:

```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

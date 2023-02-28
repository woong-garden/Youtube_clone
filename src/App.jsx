import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import VideoDetail from './pages/VideoDetail';
import Video from './pages/Video';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <NotFound />,
  children: [
    { index: true, element: <Video /> },
    { path: 'video', element: <Video /> },
    { path: 'video/:keyword', element: <Video /> },
    { path: 'video/watch/:videoId', element: <VideoDetail /> },
  ]
}])

const queryClient = new QueryClient();

function App() {
  return (
    <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </YoutubeApiProvider>
    
    
  );
}

export default App;

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import Posts from './components/Posts';

 // Create a client
 const queryClient = new QueryClient()
 
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Posts />
     </QueryClientProvider>
    </div>
  );
}

export default App;

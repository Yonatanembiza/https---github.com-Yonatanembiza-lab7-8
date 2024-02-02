import './App.css';
import CreatePost from './cotainer/CreatePost';
import Dashboard from './cotainer/Dashboard';
import PostDetail from './cotainer/PostDetail';

function App() {
  return (
    <div className="App" >
        <h1> Posts </h1>
        <Dashboard />
        <CreatePost />
        <PostDetail />
    </div>
  );
}

export default App;

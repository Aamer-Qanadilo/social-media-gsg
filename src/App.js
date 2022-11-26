import logo from "./logo.svg";
import "./App.css";
import { PostsProvider } from "./components/PostsContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <PostsProvider>
      <Navbar />
      <Home />
    </PostsProvider>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { PostsProvider } from "./components/PostsContext";
import Home from "./pages/Home";

function App() {
  return (
    <PostsProvider>
      <Home />
    </PostsProvider>
  );
}

export default App;

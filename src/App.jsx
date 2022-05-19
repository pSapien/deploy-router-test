import {
  BrowserRouter,
  HashRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

function Login() {
  return <Link to="/home">Go back to home</Link>;
}

function Home() {
  return <Link to="/login">Go back to Login</Link>;
}

export default App;

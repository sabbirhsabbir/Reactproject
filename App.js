import './home.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <div class="main">
	<div class="overlay">
		<div class="contents">
			<h1>Welcome To our website</h1>
			<p>Check our website</p>
      <Router>
			<Link to="/login"> Please Log In</Link>
      </Router>
		</div>
	</div>
</div>
    </div>
  );
}

export default App;

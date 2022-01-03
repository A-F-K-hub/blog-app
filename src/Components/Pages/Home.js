import "../Pages/Home.css";
import Header from "../Header";
import Posts from "../Posts";
import Sidebar from "../Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;

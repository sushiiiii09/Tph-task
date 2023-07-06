import background from "./images/background.jpeg";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";

function App() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="px-10 pt-10 ">
        <Sidebar />
        <div className="z-0">
          <div>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

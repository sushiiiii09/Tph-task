import "./App.css";
import background from "./images/background.jpeg";
import Sidebar from "./components/Sidebar";

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
          <h1 className="text-4xl mt-10 text-white text-center">main</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

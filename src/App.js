import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App ">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        <div className="container mx-auto w-full flex">
          {/* Sidebar */}
          <div className="sidebar w-1/4">
            <Sidebar />
          </div>

          {/* Feed */}
          <div className="feed w-1/2">
            <h1>Feed</h1>
          </div>

          {/* Widgets */}
          <div className="widgets w-1/4">
            <h1>Widgets</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

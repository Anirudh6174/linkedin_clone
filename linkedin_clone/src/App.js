import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>

      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;

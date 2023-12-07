import "./App.css";
import MainLayout from "./layout/MainLayout";
import VideoGrid from "./components/Video/VideoGrid";
import { TestSideBar } from "./components/TestSideBar";

function App() {
  return <MainLayout sidebar={<TestSideBar />} main={<VideoGrid />} />;
}

export default App;

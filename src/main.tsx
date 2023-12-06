import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { VideoProvider } from "./contexts/VideoListContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <VideoProvider>
      <App />
    </VideoProvider>
  </>,
);

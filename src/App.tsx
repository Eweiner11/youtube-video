
import './App.css'
import MainLayout from './layout/MainLayout'
import VideoGrid from './components/Video/VideoGrid'
import { TestSideBar } from './components/TestSideBar'
import { useVideo } from './contexts/VideoListContext';
import { Tooltip } from 'react-tooltip';
import VolumeSlider from './components/Video/VolumeSlider';
import VideoInputModal from './components/Video/VideoInputModal';




function App() {
  return <MainLayout sidebar={<TestSideBar />} main={<VideoGrid />} />;
}

export default App


  



import './App.css'
import MainLayout from './layout/MainLayout'
import VideoGrid from './components/VideoGrid'
import { useVideo } from './contexts/VideoListContext'
import VideoInput from './components/VideoInput'
import { Tooltip } from '@mui/material'
import VolumeSlider from './components/VolumeSlider'
import GridDND from './components/GridDND'


function App() {
  return (
  <MainLayout
    sidebar={<TestButtons/>}
    main={<VideoGrid/>}
/>
 )}
export default App


const TestButtons = () =>{
  const {videos,setVideos,toggleFullScreen,removeVideo,volumes} = useVideo()

  const oneVid = ['https://www.youtube.com/watch?v=3Ay4Sk7NRCY']
  const twoVid = ['https://www.youtube.com/watch?v=3Ay4Sk7NRCY',
  'https://www.youtube.com/watch?v=3Ay4Sk7NRCY'
]
const threeVid = ['https://www.youtube.com/watch?v=3Ay4Sk7NRCY','https://www.youtube.com/watch?v=3Ay4Sk7NRCY','https://www.youtube.com/watch?v=3Ay4Sk7NRCY']
const fourVid = ['https://www.youtube.com/watch?v=3Ay4Sk7NRCY','https://www.youtube.com/watch?v=3Ay4Sk7NRCY','https://www.youtube.com/watch?v=3Ay4Sk7NRCY','https://www.youtube.com/watch?v=3Ay4Sk7NRCY']
  return(
    <>
    <button onClick = {()=>setVideos(oneVid)}>1</button>
    <button onClick = {()=>setVideos(twoVid)}>2</button>
    <button onClick = {()=>setVideos(threeVid)}>3</button>
    <button onClick = {()=>setVideos(fourVid)}>4</button>
    <button onClick = {()=>toggleFullScreen()}>Full Screen</button>
    <VideoInput/>
    {videos.map((video:string,idx:number) =>{
      return (<><Tooltip title="Remove Video" placement="left"><div className = 'sidebar-video' onClick = {()=>removeVideo(idx)}>{video}</div></Tooltip ><VolumeSlider initialVal = {volumes[idx]} idx = {idx}/></>)
    })}
    <GridDND/>
    </>
  )
}
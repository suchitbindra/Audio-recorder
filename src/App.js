import '../src/index.css'
import './App.css';
import Navbar from './Components/Navbar';
import {ReactMediaRecorder} from 'react-media-recorder'
function App() {
  

  return (
   

   
    <ReactMediaRecorder
    audio
    render ={({ status , startRecording, stopRecording, mediaBlobUrl}) => (
       <div>

       <Navbar></Navbar>
     <div>
      <p  className='stat'>{status}</p>
      <button onClick={startRecording} className='btn0'>Start Recording &#10003; </button>
      <button onClick={stopRecording} className='btn1'>stopRecording  &#10060;</button>
      <video src={mediaBlobUrl} autoplay loop controls></video>
     </div>
     
       </div>  
       
    )}
    
/>

  );
}

export default App;
import './App.css'
import Phone from './assets/images/phone_graphic.png'
import ListOfUsers from './components/ListOfUsers'
import PhoneView from './components/PhoneView'
import User from './components/User'
import { useState } from 'react'
import BackgroundImg from './assets/images/naruto.png'
// https://stackoverflow.com/questions/51977823/type-void-is-not-assignable-to-type-event-mouseeventhtmlinputelement
// https://stackoverflow.com/questions/69161276/type-string-is-not-assignable-to-type-position
import { io } from "socket.io-client";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  const handleBG = (imgURL: string) => {
    console.log('Background changed!')
    setBackgroundImage(imgURL)

    console.log(backgroundImage)

    if (backgroundImage) {
      setBackgroundImage('')
    }
  }

  // url('./assets/images/naruto.png');
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-image: none;
  const styles: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'fixed'
  }

  const socket = io('ws://localhost:4000');
  socket.on('connect', () => {
    console.log("WebSocket connected to client-side.");
  });

  return (
    <section className='text-gray-900' style={styles}>
     <img src={Phone} alt="Phone View Graphic of iPhone" className='h-200 w-120 absolute bottom-0 right-0'/>
     <PhoneView />
     <User />
     <ListOfUsers />
     <button onClick={() => handleBG(BackgroundImg)} className='bg-amber-500 absolute top-5 right-5 text-amber-50 p-2 rounded-2xl border-2 shadow-2xl hover:bg-amber-700 cursor-pointer'>Change Background</button>
    </section>
  )
}
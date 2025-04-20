import './App.css'
import Phone from './assets/images/phone_graphic.png'
import PhoneView from './components/PhoneView'

export default function App() {
  return (
    <>
     <h1 className='text-3xl font-bold underline text-gray-300'>test</h1>
     <img src={Phone} alt="Phone View Graphic of iPhone" className='h-200 w-120 absolute bottom-0 right-0'/>
     <PhoneView />
    </>
  )
}
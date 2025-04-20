import './App.css'
import Phone from './assets/images/phone_graphic.png'
import ListOfUsers from './components/ListOfUsers'
import PhoneView from './components/PhoneView'
import User from './components/User'

export default function App() {
  return (
    <section className='text-gray-900'>
     <img src={Phone} alt="Phone View Graphic of iPhone" className='h-200 w-120 absolute bottom-0 right-0'/>
     <PhoneView />
     <User />
     <ListOfUsers />
    </section>
  )
}
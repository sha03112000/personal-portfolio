import './App.css'
import HomePage from './pages/HomePage'
import { ToastContainer } from "react-toastify";

function App() {


  return (
    <>
      <HomePage />
      <ToastContainer autoClose={3000} />
    </>

  )
}

export default App

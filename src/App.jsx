import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/auth"
import { Footer, Header } from './components'

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
   
  return  !loading ? (
    <div className='min-h-screen flex flex-wrap bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
         TODO: {/* outlet  */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div className="h-[20px] w-[20px] rounded-full border-2 border-t-transparent border-red-500 animate-spin"></div>

  )
}

export default App
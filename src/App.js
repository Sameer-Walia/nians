import './App.css';
import Header from './components/Header';
import Siteroutes from './components/Siteroutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import CommonHeader from './components/CommonHeader';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './reduxslices/authSlice';
import Cookies from 'universal-cookie';


function App()
{

  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const usercokkie = new Cookies()

  useEffect(() =>
  {
    if (sessionStorage.getItem("userdata") !== null)
    {
      dispatch(login(JSON.parse(sessionStorage.getItem("userdata"))));
    }
  }, [dispatch])


  return (
    <>
      {
        isLoggedIn === false ? <Header /> : <CommonHeader />
      }
      <Siteroutes />
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;


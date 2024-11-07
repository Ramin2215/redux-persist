import { useEffect, useReducer, useRef, useState, Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Header } from './styledComponents/styled'

import { initialState, reducer } from './reducer/reducer'
import { Route, Routes } from 'react-router-dom'
import { Context } from '@/context/contex'
import { URL } from './constant/url'
import { allFetch } from './service'





// Lazy loaded components
const Form = lazy(() => import('./components/Form'));
const Todos = lazy(() => import('./components/Todos'));
const Home = lazy(() => import('@/pages/home/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Map = lazy(() => import('./pages/Map'));
const Basket = lazy(() => import('./pages/Basket'));
const BlogDetails = lazy(() => import('./pages/blog/BlogDetails'));
const BlogLayout = lazy(() => import('./pages/blog/BlogLayout'));
const HomeLayout = lazy(() => import('./pages/home/HomeLayout'));
const Dinamik = lazy(() => import('./pages/Dinamik'));
const Error = lazy(() => import('./pages/Error'));
const Login = lazy(() => import('./pages/Login'));
const PrivteProfile = lazy(() => import('./pages/PrivteProfile'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState(1)
  const [value, setValue] = useState(5)
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [user, setUser] = useState(false);
  const ref = useRef();
  const refCount = useRef(1);

  const refFunction = () => {
    refCount.current += 1;
    ref.current.innerText = refCount.current
  }

  let name = "Erestun";
  document.body.style.backgroundColor = state.show ? "yellow" : "";

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "todos" });
    dispatch({ type: "value", payload: "" });
  }

  const allData = {
    ...state,
    dispatch,
    submit,
    name,
    user,
    setUser
  }



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, [count])

  return (
    <Context.Provider value={allData}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={URL.HOME_PAGE} element={<HomeLayout />}>
            <Route index={true} element={<Home />} />
            <Route path={URL.CONTACT_PAGE} element={<Contact />} />
            <Route path={URL.BLOG_PAGE} element={<BlogLayout />}>
              <Route index={true} element={<Blog />} />
              <Route path={URL.BLOG_DETAILS_PAGE} element={<BlogDetails />} />
            </Route>
            <Route path={URL.MAP_PAGE} element={<Map />} />
            <Route path={URL.BASKET_PAGE} element={<Basket />} />
            <Route loader={allFetch.GET_PRODUCTS} path={URL.DINAMIK_PAGE} element={<Dinamik />} />
            <Route path={URL.PROFILE_PAGE} element={<PrivteProfile><Profile /></PrivteProfile>} />
          </Route>
          <Route path={URL.ERROR_PAGE} element={<Error />} />
          <Route path={URL.LOGIN_PAGE} element={<Login />} />
        </Routes>
      </Suspense>
    </Context.Provider>
  )
}

export default App;

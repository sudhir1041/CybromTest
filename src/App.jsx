import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home"
import About from "./components/About"
import Faculty from "./components/Faculty"
import Courses from "./components/Courses"
import Contact from "./components/Conatct"
import Cybrom from "./components/Cybrom"
import Counter from "./components/Counter"
import StudentForm from "./components/StudentForm"
import DisplayData from "./components/DisplayData"
import ThemeChanging from "./components/TemeChanging"


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>}>
              <Route path="design" element={<Cybrom/>}/>
              <Route path="display" element={<DisplayData/>}/>
              <Route path="counter" element={<Counter/>}/>
              <Route path="stduentform" element={<StudentForm/>}/>
              <Route path="theme" element={<ThemeChanging/>}/>
              </Route>
            <Route path="about" element={<About/>} />
            <Route path="faculty" element={<Faculty/>} />
            <Route path="ourcourses" element={<Courses/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

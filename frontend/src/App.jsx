// import Course from "./components/Course"
import Signup from "./components/Signup"
import Courses from "./courses/Courses"
import Home from "./home/home"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
    </>
  )
}

export default App


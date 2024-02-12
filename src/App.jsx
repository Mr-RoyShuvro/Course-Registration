import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = course =>{
    const newBookmarks = [...bookmarks, course];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Courses handleAddToBookmarks ={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

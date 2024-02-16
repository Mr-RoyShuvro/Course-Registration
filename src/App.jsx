import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleTotalCredit = credit => {
    setTotalCredit(credit + totalCredit);
  }

  const handleRemainingCredit = (credit) =>{
    setRemainingCredit(remainingCredit - credit);
  }


  const handleAddToBookmarks = (course, credit) => {
    const newBookmarks = [...bookmarks, course];
    setBookmarks(newBookmarks);
    handleTotalCredit(credit);
    // Remaining Credit
    handleRemainingCredit(credit);

    
  }

  

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Courses handleAddToBookmarks={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit} remainingCredit={remainingCredit}></Bookmarks>
      </div>
    </>
  )
}

export default App

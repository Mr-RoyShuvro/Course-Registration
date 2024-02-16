import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalCredit = credit => {
    setTotalCredit(credit + totalCredit);
  }

  const handleRemainingCredit = (credit) => {
    setRemainingCredit(remainingCredit - credit); 
  }

  const handleTotalPrice = price =>{
    setTotalPrice(totalPrice + price);
  }

  const handleAddToBookmarks = (course, credit, price) => {
    const newBookmarks = [...bookmarks, course];
    // Remaining Credit
    if (remainingCredit <= 1) {
      alert('Your credit is already finished. So you can not add more credit. Thank you!');
      remainingCredit = 0;
      totalCredit = 20;
      // return newBookmarks;   
    }
    setBookmarks(newBookmarks);
    handleTotalCredit(credit);
    handleRemainingCredit(credit);
    handleTotalPrice(price);
  }



  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Courses handleAddToBookmarks={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit} remainingCredit={remainingCredit} totalPrice={totalPrice}></Bookmarks>
      </div>
    </>
  )
}

export default App

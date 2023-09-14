import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog)=>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    //console.log("book mark adding soon", blog)
  }

  const handleAsMarkRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove the read blog from bookmark
    //console.log("book mark remove", id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark) 
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex gap-6'>
        <Blogs 
          handleAddToBookmark={handleAddToBookmark}
          handleAsMarkRead={handleAsMarkRead}
        ></Blogs>
        <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
      
    </div>
  )
}

export default App

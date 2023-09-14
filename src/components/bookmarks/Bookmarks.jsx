import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    //console.log("new Book Mark", bookmarks)
  return (
    <div className="md:w-1/3 mt-28 bg-gray-100 p-5 ml-4">
        <div className='text-2xl text-green-500'>
            <h2>Spend Time on Read: {readingTime}</h2>
        </div>
      <div>
        <h2 className='text-3xl font-bold'>Bookmarks: {bookmarks.length}</h2>
        <div >
            {
                bookmarks.map((bookMark, index) => <Bookmark 
                    key={index} 
                    bookMark={bookMark}
                    readingTime={readingTime}
                ></Bookmark>)
            }
      </div>
     </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks

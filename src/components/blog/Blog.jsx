import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark, handleAsMarkRead }) => {
    //console.log("here is blog" ,blog)
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog
  return (
    <div className='mt-16'>
        <img className='rounded-xl' src={cover} alt={`cover picture of the ${title}`} />
        <div className='flex justify-between mt-4 items-center'>
            <div className='flex gap-8'>
                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-dark" src={author_img} alt="" />
                <div>
                    <h4 className='text-2xl font-medium'>{author}</h4>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <span>{reading_time} min read</span>
                <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-gray-500 text-2xl'><FaBookmark/></button>
            </div>
        </div>
      <h2 className="text-4xl font-bold my-4">{title}</h2>
      <p>
        {
            hashtags.map((hash, index) => <span key={index}><a href="">{hash}  </a></span>)
        }
      </p>
      <button 
        className='mt-6 rounded bg-green-600 text-white px-4 py-3 btn btn-secondary'
        onClick={()=> handleAsMarkRead(id, reading_time)}
      >Make as read</button>
    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleAsMarkRead: PropTypes.func
}

export default Blog

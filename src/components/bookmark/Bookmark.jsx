import PropTypes from 'prop-types'

const Bookmark = ({bookMark}) => {
    const {title} = bookMark
  return (
    <div >
      <div className='m-5 p-4 bg-slate-200 rounded-lg'>
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <p>#30D979CC</p>
    </div>
  )
}

Bookmark.propTypes = {
    bookMark: PropTypes.object
}

export default Bookmark

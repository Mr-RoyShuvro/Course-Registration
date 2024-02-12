import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className='text-xl font-normal text-gray-600'> {title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired
}
export default Bookmark;
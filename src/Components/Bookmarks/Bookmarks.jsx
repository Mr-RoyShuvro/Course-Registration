import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, totalCredit, remainingCredit, totalPrice}) => {
    return (
        <div className="w-1/4 bg-gray-200">
            <div className="mr-14 bg-white rounded-xl p-6">
                <div className="pb-4 border-b-2">
                    <h3 className="text-2xl font-bold text-sky-500">Credit Hour Remaining: {remainingCredit} hr</h3>
                </div>
                
                <div className="pt-4 pb-6 border-b-2">
                    <h2 className="text-2xl font-bold pb-6">Course Name: {bookmarks.length}</h2>
                    {
                        bookmarks.map((bookmark) =><Bookmark key={bookmarks.id} bookmark = {bookmark}></Bookmark>)
                    } 
                </div>
                <div className="border-b-2 py-4">
                    <h4 className="text-xl font-medium">Total Credit Hour : {totalCredit}</h4>
                </div>
                <div className="pt-4 pb-6">
                    <h3 className="text-xl font-semibold">Total Price : {totalPrice} USD</h3>
                </div>
            </div>
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    totalCredit: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}
export default Bookmarks;
import PropTypes from 'prop-types';
import { IoBookOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";


const Course = ({ course, handleAddToBookmarks }) => {
    const {cover, title, description, price, credit } = course;
    return (
        <div className='rounded-2xl bg-white px-4 pt-4 pb-4'>
            <img className='h-60 w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <h3 className='text-2xl font-semibold pt-4 pb-3'>{title}</h3>
            <p className='text-lg font-normal pb-4 '>{description}</p>
            <div className='flex justify-between pb-6'>
                <div className='flex gap-4'>
                    <button className='text-2xl'><FiDollarSign /></button>
                    <h3 className='text-lg font-medium'>Price: {price}</h3>
                </div>
                <div className='flex gap-4'>
                    <button className='text-2xl'><IoBookOutline></IoBookOutline></button>
                    <h3 className='text-lg font-medium'>Credit: {credit} hr</h3>
                </div>

            </div>
            <div className=''>
                <button onClick={()=> handleAddToBookmarks(course, credit)} className='w-full text-xl py-2 px-5 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Select</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Course;
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToBookmarks}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data=> setCourses(data));
    },[])
    return (
        <div className="w-3/4 pl-14 pr-6 bg-gray-200 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course = {course}
                    handleAddToBookmarks={handleAddToBookmarks}
                    ></Course>)
            }
            </div>
        </div>
    );
};


Courses.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Courses;
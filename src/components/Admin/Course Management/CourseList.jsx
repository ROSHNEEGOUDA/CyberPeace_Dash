import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
    // Example array of courses
    const courses = [
        { id: 1, courseNameProp: "Introduction to Cyber Security", imageUrlProp: "path/to/image.jpg", moduleCountProp: 5, videoCountProp: 0, durationDaysProp: 12, creatorNameProp: "Alam Lin" },
        // Add more courses as needed
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(course => (
                <CourseCard
                    key={course.id}
                    courseNameProp={course.courseNameProp}
                    imageUrlProp={course.imageUrlProp}
                    moduleCountProp={course.moduleCountProp}
                    videoCountProp={course.videoCountProp}
                    durationDaysProp={course.durationDaysProp}
                    creatorNameProp={course.creatorNameProp}
                />
            ))}
        </div>
    );
};

export default CourseList;

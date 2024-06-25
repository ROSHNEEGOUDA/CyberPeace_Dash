// AdminRoutes.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCourse from './AdminCourse';
import EditCourse from './EditCourse';
import LayoutAdmin from "../layout";

const AdminRoutes = () => {
  const initialCourses = [
    {
      id: 1,
      title: 'Introduction to Cyber Security',
      description: 'Learn the basics of cyber security.',
      trainer: 'Alam Lin',
      level: 'Beginner',
      tools: 'Kali Linux',
      image: 'image_url',
    },
    // Add more courses as needed
  ];

  const [courses, setCourses] = useState(initialCourses);

  const updateCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course))
    );
  };

  return (
    <Routes>
      <Route path="/AdminCourse" element={<LayoutAdmin><AdminCourse courses={courses} /></LayoutAdmin>} />
      <Route path="/AdminCourse/EditCourse/:id" element={<LayoutAdmin><EditCourse courses={courses} updateCourse={updateCourse} /></LayoutAdmin>} />
    </Routes>
  );
};

export default AdminRoutes;

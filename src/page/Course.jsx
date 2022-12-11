import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Cardcourse from './Cardcourse';
const Course = () => {
  return (
    <MainLayout>
    <div style={divStyle}>
    <h1>หลักสูตรที่เปิดสอน</h1>
    <Cardcourse/>
    </div>
    </MainLayout>
    
  )
}
const divStyle={
  borderRadius: 5,
  padding: 5,
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: 15,
}
export default Course;
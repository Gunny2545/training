import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Firstpic from './หน้าแรก.jpg';
const Home = () => {
  return (
    <MainLayout>
    <div style={divStyle}>
    <h1>หน้าแรก</h1>
    <img src={Firstpic} width="1000" height="550" alt="" />
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
export default Home;
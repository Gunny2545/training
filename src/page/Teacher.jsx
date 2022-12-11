import React from 'react';
import MainLayout from '../Layouts/MainLayout';
const Home = () => {
  return (
    <MainLayout>
    <div style={divStyle}>
    <h1>คณาอาจารย์ผู้สอน</h1>
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
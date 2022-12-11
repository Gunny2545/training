import React from 'react';
import MainLayout from '../Layouts/MainLayout';
const Home = () => {
  return (
    <MainLayout>
    <div style={divStyle}>
    <h1>ติดต่อ</h1>
    <h1>NVC Training Center</h1>
    <p>Address: 90 Tesa Rd. Mueang, Nakhon Pathom 73000</p>
    <p>Tel: 034-252790</p>
    <p>Email: admin@nvctrainingcenter.com</p>
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
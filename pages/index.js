import React from 'react'
import Navbar from "../pages/Components/navbar"

const Index = ({acc}) => {
  console.log(acc);
  return (
    <div>
      <Navbar/>
      <h1>{acc[0].name}</h1>
    </div>
  )
}

export async function getStaticProps(){
  let r=await fetch("http://localhost:8090/account");
  let d=await r.json();
  return{
    props:{
      acc:d,
    },
  };
}

export default Index
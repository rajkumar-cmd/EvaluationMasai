import React from 'react'
import Navbar from "../pages/Components/navbar"
import Image from 'next/image';
import style from "../styles/Home.module.css";

const Index = ({ acc }) => {
  console.log(acc);
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className={style.header}>
        <div>
          <Image src={acc[0].avatar_url} alt={acc[0].name} width={250} height={250} />
        </div>
        <div>
          <h1>Name: {acc[0].name}</h1>
          <h3>UserName:<a href={acc[0].html_url}>{acc[0].login}</a></h3>
          <h3>Company: {acc[0].company}</h3>
          <h3>Portfolio: <a href={acc[0].blog}>Rajkumar Portfolio</a></h3>
          <h3>Location: {acc[0].location}</h3>
        </div>
        <div className={style.resume}>
          <a href="https://drive.google.com/file/d/1CXpn4XyaG3I4gXrwoEC7FHjvbD8EQJzz/view?usp=sharing"><button><h1>RESUME</h1></button></a>
        </div>
      </div>
      <br />
      <div className={style.tech}>
        <div>
          <h1>Tech Stack</h1>
        </div>
        <div className={style.mastersub}>
          <p className={style.techsub}>HTML</p>
          <p className={style.techsub}>CSS</p>
          <p className={style.techsub}>Javascript</p>
          <p className={style.techsub}>NodeJS</p>
          <p className={style.techsub}>ExpressJS</p>
          <p className={style.techsub}>React</p>
          <p className={style.techsub}>NextJS</p>
        </div>
      </div>
      <br />
      <div className={style.education}>
        <div>
          <h1>Education</h1>
        </div>
        <div className={style.edumain}>
          <div className={style.edu}>
            <h2>Masai School</h2>
            <h3>Online</h3>
            <h3>Location:Banglore</h3>
          </div>
          <div className={style.edu}>
            <h2>RCC Institute of Information Technology</h2>
            <h3>OnSite</h3>
            <h3>Location:Kolkata</h3>
          </div>
          <div className={style.edu}>
            <h2>K.V No-1 Saltlake</h2>
            <h3>OnSite</h3>
            <h3>Location:Kolkata</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let r = await fetch("http://localhost:8090/account");
  let d = await r.json();
  return {
    props: {
      acc: d,
    },
  };
}

export default Index
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineFundProjectionScreen, AiOutlineLink, AiFillStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import style from "../../styles/projects.module.css"
import Navbar from "../Components/navbar"
const Index = ({ item }) => {
  console.log(item)
  return (
    <div>
      <Navbar/>
      <h1 className={style.pro}>PROJECTS</h1>
      <div className={style.main}>
        {item.map((val) => (
          <div key={val.id}>
            <div className={style.mainHead}>
              <Icon as={AiOutlineFundProjectionScreen} boxSize={40} className={style.icon} />
              <div>
                <h1>{val.name}</h1>
                <div>
                  <a href={val.html_url} className={style.linkMain}>
                    <div className={style.link}>
                      <Icon as={AiOutlineLink} boxSize={20} className={style.icon} />
                      <h2>Link</h2>
                    </div>
                  </a>
                </div>
                <div className={style.basic}>
                  <div className={style.link}>
                    <Icon as={AiFillStar} boxSize={20} className={style.icon} />
                    <h2>{val.stargazers_count}</h2>
                  </div>
                  <div className={style.link}>
                    <Icon as={BiGitRepoForked} boxSize={20} className={style.icon} />
                    <h2>{val.forks}</h2>
                  </div>
                  <div className={style.link}>
                    <h2>Language: {val.language}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let r = await fetch("http://localhost:8090/items");
  let d = await r.json();
  return {
    props: {
      item: d,
    },
  };
}

export default Index
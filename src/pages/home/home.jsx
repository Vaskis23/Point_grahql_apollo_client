import React, {useState} from "react";
import {gql,useQuery} from "@apollo/client";
import NewsBlock from "../../components/news_blok/news_blok";
import styled from "styled-components";




const LoadMore = styled.button`
border: none;
outline: none;
text-decoration: none;
color: rgb(51, 121, 191);
background: rgb(238, 238, 238);
margin: 49px auto 37px;
padding: 8px 55.5px 10.5px;
min-width: 193px;
max-width: 100%;
height: 36px;
font-size: 13px;
font-weight: 600;
border-radius: 100px;
cursor: pointer;
display: block;`

const NewsContainer = styled.div`
padding-left: 20px;
padding-right: 20px;`

const GET_NEWS = gql`
  query Contents {
    contents (project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1", take: 40, lang:"ru") {
        id
        title {
          short
       }
       description {
        intro
      }
       thumbnail
       dates {
      dateT: posted(lang: "ru", getDiff: true)
    }
        counters {
            comment
        }
    }

  }
  `


const HomePage = () => {
    const [newsCount, setNewsCount] = useState(5);
    const {data} = useQuery(GET_NEWS);
    if (!data?.contents) return null;
    const { contents } = data;
    const showMore = () => {
      setNewsCount(prevValue=>prevValue + 5);
    } 
    
    return(
       
        <NewsContainer>
         
            {contents && (
               contents.slice(0, newsCount).map((content) =>  <NewsBlock 
               key={content.id}
               img={content.thumbnail}
               title={content.title.short}
               description={content.description.intro}
               dates={content.dates.dateT}
               counters={content.counters.comment}
               id={content.id}
               />)

            )
        }
        <LoadMore onClick={showMore}>ещё новости</LoadMore>
                
        </NewsContainer>

       
    )
    
   

}

export default HomePage;
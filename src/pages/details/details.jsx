import React from "react";
import {gql,useQuery} from "@apollo/client";
import { useParams } from "react-router-dom";
import { ContainerArtical,ArticalInfo } from "./details.style";


const GET_NEWS_DETAILS = gql`
  query Content ($id: String!) {
    content (project_id:"5107de83-f208-4ca4-87ed-9b69d58d16e1",id: $id) {
        id
        title {
          short
          
       }
       description {
        intro
        
      }
       thumbnail

    }
  }
  `

const NewsDetailsPage = () => {
    const {id} = useParams();
    const {data} = useQuery(GET_NEWS_DETAILS, {variables: {id:id}});
    console.log(data)
    return (<ContainerArtical>
                <h1>{data?.content?.title?.short}</h1>
                <ArticalInfo>
                    <p>{data?.content?.description?.intro}</p>
                    <img src={`https://i.simpalsmedia.com/point.md/news/370x194/${data?.content?.thumbnail}`} alt=""/>
                </ArticalInfo>
            </ContainerArtical>)
}

export default NewsDetailsPage;
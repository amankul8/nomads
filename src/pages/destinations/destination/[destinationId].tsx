import { FirstBlockLayout, Layout } from "@/layout";
import { GetStaticPropsContext } from "next";
import React from "react";

export default function Destination(props:any):JSX.Element{

    return(
        <Layout>
            <FirstBlockLayout
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
                isFullSize={true}
            >
            </FirstBlockLayout>
        </Layout>
    )
} 

export async function getStaticPaths(){
    const ids = [1,2,3,4,5,6,7,8];
  const paths = ids.map((id) => ({
    params: { destinationId: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context:GetStaticPropsContext){
    const { params } = context;
    return{
        props:{
            
        },
        revalidate: 60 * 30
    }
}
import { TourFirstBlock } from "@/components/blocks/firstBlocks";
import {FirstBlockLayout, Layout} from "@/layout"
import { GetStaticPropsContext } from "next";
import { TourContent } from "@/components/content";

export default function Tour() {

  return (
    
    <Layout>
      <TourFirstBlock/>
      <TourContent/>
    </Layout>
  );
};

export async function getStaticPaths(){
  const ids = [1,2,3,4,5,6,7,8];
  const paths = ids.map((id) => ({
    params: { tourId: id.toString() },
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

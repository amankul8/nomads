import { RegionMapContent } from "@/components/content/regionMapContent";
import { Layout } from "@/layout";
import { GetStaticPropsContext } from "next";

export default function RegionMap(props:any):JSX.Element{

    return(
        <Layout>
            <RegionMapContent/>
        </Layout>
    );
} 

export async function getStaticPaths(){
    const ids = [1,2,3,4,5,6,7,8];
  const paths = ids.map((id) => ({
    params: { region_id: id.toString() },
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
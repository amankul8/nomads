import { DestinationsFirstBlock } from "@/components/pageFirstBlocks";
import { UniversalBlock } from "@/layouts/block/universal";
import { DestinationCard } from "@/components/cards/destinationCard";
import { useRouter } from 'next/navigation'
import {Layout } from "@/layouts";
import React from "react";
import { CustomButton } from "@/ui";

const regions = [
    {
        id: 1,
        name: 'All',
        isActive: true
    },
    {
        id: 2,
        name: 'Bishkek',
        isActive: false
    },
    {
        id: 3,
        name: 'Chui',
        isActive: false
    },
    {
        id: 4,
        name: 'Issyk Kul',
        isActive: false
    },
    {
        id: 5,
        name: 'Jalal Abad',
        isActive: false
    },
    {
        id: 6,
        name: 'Naryn',
        isActive: false
    },
    {
        id: 7,
        name: 'Osh',
        isActive: false
    },
    {
        id: 8,
        name: 'Talas',
        isActive: false
    },
    {
        id: 9,
        name: 'Batken',
        isActive: false
    },
]

export default function Destinations():JSX.Element{

    const router = useRouter();

    const handleDescription = (id: number) => {
        router.push('/destinations/destination/1')
    }

    return(
        <Layout>
            <DestinationsFirstBlock/>

            <UniversalBlock
                title="Destinations By Region"
            >
                {
                    regions.map((item)=>{
                        return(
                            <CustomButton
                                color="blue"
                                handler={()=>{}}
                            >
                                {item.name}
                            </CustomButton>
                    )})
                }
            </UniversalBlock>
            
            <UniversalBlock>
                <DestinationCard 
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(1) }
                />
                <DestinationCard
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(2) }
                />
                <DestinationCard
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(3) }
                />
            </UniversalBlock>
        </Layout>
    )
}

export async function getStaticProps(){
    return{
        props: {},
        revalidate: 60 * 30
    }
}
import { UniversalBlock } from "@/layouts/block/universal";
import { DestinationCard } from "@/components/cards/index";
import { useRouter } from 'next/navigation'
import {BlockWithSkirt, FirstBlockLayout, Layout } from "@/layouts";
import React from "react";
import { CustomButton } from "@/ui";
import TourInfoCardSlider from "@/components/sliders/tour/tourInfoCardSlider";

import styles from './destination.module.scss';

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
            <FirstBlockLayout
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
            />

            <UniversalBlock
                title="Destinations By Region"
            >
                {
                    regions.map((item, index)=>{
                        return(
                            <CustomButton
                                color="blue"
                                handler={()=>{}}
                                key={index}
                            >
                                {item.name}
                            </CustomButton>
                    )})
                }
            </UniversalBlock>
            
            <UniversalBlock classname={styles.destinations}>
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
                <DestinationCard
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(3) }
                />
                <DestinationCard
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(3) }
                />
                <DestinationCard
                    name="Bishkek"
                    image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
                    onClick={ ()=>handleDescription(3) }
                />
            </UniversalBlock>

            <BlockWithSkirt image="">
                <TourInfoCardSlider
                    list={[1,2,3,4,5]}
                    isCenteredMode={true}
                    title="Tours In this Destinations"
                />
                
            </BlockWithSkirt>
        </Layout>
    )
}
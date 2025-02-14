import { UniversalBlock } from "@/layouts/block/universal";
import {BlockWithSkirt, FirstBlockLayout, Layout } from "@/layouts";
import React from "react";
import { CustomButton } from "@/ui";
import TourInfoCardSlider from "@/components/sliders/tour/tourInfoCardSlider";

import styles from './destinations.module.scss';
import { DestinationsList } from "@/modules/destinations/destinationsList";

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

export default function Destinations() {

    return(
        <Layout>
            <FirstBlockLayout
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
            />

            <UniversalBlock
                title="Destinations By Region"
                isBg={true}
            >
                <div className={styles.content}>
                    <div className={styles.filter}>
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
                    </div>
                    
                    <div className={styles.list}>
                        <DestinationsList/>
                    </div>
                </div>
                
            </UniversalBlock>

            <BlockWithSkirt image="">
                <TourInfoCardSlider
                    list={[1,2,3,4,5,6,7,8,9,8,]}
                    isCenteredMode={true}
                    title="Tours In this Destinations"
                />
                
            </BlockWithSkirt>
        </Layout>
    )
}
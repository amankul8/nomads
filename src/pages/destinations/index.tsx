import { UniversalBlockItems } from "@/components/blocks/UniversalBlockItems";
import { DestinationCard } from "@/components/cards/destinationCard";
import { FirstBlockLayout, Layout } from "@/layout";
import { btnBorderSizeType, btnColorType, btnViewType, Button } from "@/ui";
import React from "react";

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

    return(
        <Layout>
            <FirstBlockLayout
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
                isFullSize={true}
            >
            </FirstBlockLayout>

            <UniversalBlockItems
                title="Destinations By Region"
            >
                {
                    regions.map((item)=>{
                        return(
                            <Button
                                btnColor={btnColorType.blue}
                                btnSize={btnBorderSizeType.l}
                                btnView={btnViewType.button}
                                enabled={item.isActive}
                                key={item.id}
                            >
                                {item.name}
                            </Button>
                    )})
                }
            </UniversalBlockItems>
            <UniversalBlockItems>
                <DestinationCard key={1}/>
                <DestinationCard key={2}/>
                <DestinationCard key={3}/>
                <DestinationCard key={4}/>
                <DestinationCard key={5}/>
                <DestinationCard key={6}/>
                <DestinationCard key={7}/>
                <DestinationCard key={8}/>
                <DestinationCard key={9}/>
                <DestinationCard key={10}/>
                <DestinationCard key={11}/>
                <DestinationCard key={12}/>
                <DestinationCard key={13}/>
            </UniversalBlockItems>
        </Layout>
    )
}

export async function getStaticProps(){
    return{
        props: {},
        revalidate: 60 * 30
    }
}
import React from "react";
import { UniversalBlock } from "@/layouts/block/universal";
import { FirstBlockLayout, Layout } from "@/layouts";
import { CustomButton, Headline, Paragraph } from "@/ui";
import styles from './destinations.module.scss';
import cn from 'classnames';
import { DestinationsList } from "@/components/list/destinationsList";
import { Alert } from "@mui/material";
import { useAppSelector } from "@/store/hooks";
import { selectSortedRegions, selectRegionsLoadingStatus } from "@/store/slices/regions.slice";
import { selectDestinationsByRegion, selectDestinationsLoadingStatus } from "@/store/slices/destinations.slice";
import Loading from "@/components/loading";
import { NextSeo } from "next-seo";

export default function Destinations() {

    const [selectedRegionId, setselectedRegionId] = React.useState<number | null>(null);

    const regions = useAppSelector(selectSortedRegions);
    const isLoadingRegions = useAppSelector(selectRegionsLoadingStatus);

    const destinations = useAppSelector(state => selectDestinationsByRegion(state, selectedRegionId));
    const isLoadingDestinations = useAppSelector(selectDestinationsLoadingStatus);

    return (

        <>
            <NextSeo
                title="Destinations | Nomad"
                description="Learn more about our team and mission."
                canonical="http://localhost:3000/destinations"
                openGraph={{
                    url: "http://localhost:3000/destinations",
                    title: "Destinations | Nomad",
                    description: 'Learn more about our team and mission.',
                }}
            />
            <Layout>
                <FirstBlockLayout
                    bg_image="/images/bg/destinations/image1.webp"
                >
                    <div className={cn('container', styles.head_content)}>
                        <Headline color="white" type="main">
                            Central Asia, Kyrgyzstan
                        </Headline>
                        <Paragraph>
                            Central Asia is a land where ancient traditions and the magic of nature come together in a magnificent harmony. Vast sandy deserts, majestic mountains, and oases hidden in the heart of the steppes create a unique landscape that captivates the soul. Historic cities such as Samarkand and Bukhara hold the secrets of millennia, while desert landscapes and azure lakes provide tranquility. Central Asia is a journey through the most beautiful and mysterious corners of the world, filled not only with history but also with the harmony of nature.    
                        </Paragraph>
                    </div>
                </FirstBlockLayout>

                <UniversalBlock
                    title="Destinations By Region"
                    isBg={true}
                >
                    <div className={styles.content}>
                        {
                            isLoadingRegions || isLoadingDestinations
                            ?  <Loading/>
                            :   <>
                                    <div className={styles.filter}>
                                        <CustomButton
                                            color="blue"
                                            active={selectedRegionId === null}
                                            handler={() => setselectedRegionId(null)}
                                            key={'all'}
                                        >
                                            All
                                        </CustomButton>
                                        {regions.map((item) => {
                                            if(item) {
                                                return(
                                                    <CustomButton
                                                        color="blue"
                                                        active={selectedRegionId === item.id}
                                                        handler={() => setselectedRegionId(item.id)}
                                                        key={item.id}
                                                    >
                                                        {item.name}
                                                    </CustomButton>
                                                )
                                            }
                                        })}
                                    </div>

                                    <div className={styles.list}>
                                        {
                                            destinations.length > 0
                                            ?   <DestinationsList list={destinations} />
                                            :   <Alert severity="info"> No destinations </Alert>
                                        }
                                        
                                    </div>
                                </>
                        }
                    </div>
                </UniversalBlock>
            </Layout>
        </>
    );
}

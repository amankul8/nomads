import React from "react";
import { UniversalBlock } from "@/layouts/block/universal";
import { FirstBlockLayout, Layout } from "@/layouts";
import { CustomButton } from "@/ui";
import styles from './destinations.module.scss';
import { DestinationsList } from "@/modules/destinations/destinationsList";
import { Alert, CircularProgress } from "@mui/material";
import { useAppSelector } from "@/store/store";
import { selectRegions, selectRegionsLoadingStatus } from "@/store/slices/regions.slice";
import { selectDestinationsByRegion, selectDestinationsLoadingStatus, selectDestinationsSuccessedStatus } from "@/store/slices/destinations.slice";

export default function Destinations() {

    const [region, setRegion] = React.useState<string>('');

    const regions = useAppSelector(selectRegions);
    const isLoadingRegions = useAppSelector(selectRegionsLoadingStatus);

    const destinations = useAppSelector(state => selectDestinationsByRegion(state, region));
    const isLoadingDestinations = useAppSelector(selectDestinationsLoadingStatus);

    return (
        <Layout>
            <FirstBlockLayout
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
            />

            <UniversalBlock
                title="Destinations By Region"
                isBg={true}
            >
                <div className={styles.content}>
                    {
                        isLoadingRegions || isLoadingDestinations
                        ?  <CircularProgress sx={{margin: 'auto'}}/>
                        :   <>
                                <div className={styles.filter}>
                                    <CustomButton
                                        color="blue"
                                        active={region === ''}
                                        handler={() => setRegion('')}
                                        key={'all'}
                                    >
                                        All
                                    </CustomButton>
                                    {regions.map((item) => (
                                        <CustomButton
                                            color="blue"
                                            active={region === item!.name}
                                            handler={() => setRegion(item!.name)}
                                            key={item?.id}
                                        >
                                            {item?.name}
                                        </CustomButton>
                                    ))}
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
    );
}

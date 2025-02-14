import { DestinationCard } from "@/components/cards";
import React from "react";
import styles from "./destinationsList.module.scss";

type DestinationsListType = {

}

export const DestinationsList:React.FC<DestinationsListType> = () => {
    return (
        <div className={styles.list}>
            <DestinationCard 
                id={1}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
            <DestinationCard
                id={2}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
            <DestinationCard
                id={3}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
            <DestinationCard
                id={4}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
            <DestinationCard
                id={5}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
            <DestinationCard
                id={6}
                name="Bishkek"
                image="https://mcdn.wallpapersafari.com/medium/41/66/2pefBJ.jpg"
            />
        </div>
    )
}
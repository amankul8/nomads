import { DestinationCard } from "@/components/cards";
import React from "react";
import styles from "./destinationsList.module.scss";
import { DestinationType } from "@/store/models/destinations";
import { BASE_IMAGE_ULR } from "@/config";


type DestinationsList = {
    list: Array<DestinationType | undefined>
}

export const DestinationsList = ( {list}: DestinationsList ) => {

    return (
        <div className={styles.list}>
            {
                list.map((item)  => {
                    return (
                        <DestinationCard 
                            id={item!.id}
                            name={item!.title}
                            image={BASE_IMAGE_ULR + item!.main_image}
                            key={item!.title}
                        />
                    )
                })
            }
        </div>
    )
}
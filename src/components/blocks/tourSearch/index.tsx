import React, { DetailedHTMLProps, HtmlHTMLAttributes, useState } from "react";
import cn from "classnames";

import styles from "./tourSearch.module.scss";
import {
    SearchInput, 
    Headline, 
} from "@/ui";



interface ITourSearch extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const TourSearch:React.FC<ITourSearch> = () => {

    const [value, setValue] = useState<string | number | Date>();

    return (
        <section className={styles.wrapper}>
            
            <div className={cn('container', styles.container)}>
                <Headline
                    type='section'
                    color='black'
                >
                    Search For Tour
                </Headline>

                <div className={styles.search_form}>

                    <SearchInput 
                        label="Duration"
                        type="text"
                    />

                    <SearchInput 
                        label="Duration"
                        type="number"
                    />

                    <SearchInput 
                        label="Duration"
                        type="date"
                    />
                    
                </div>
            </div>

        </section>
    )
}
import React, { DetailedHTMLProps, HtmlHTMLAttributes, useState } from "react";

import styles from "./tourSearch.module.scss";
import {
    InputSelectList, 
    SearchInput, 
    Headline, 
} from "@/ui";



interface ITourSearch extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const TourSearch:React.FC<ITourSearch> = () => {

    const [value, setValue] = useState<string | number | Date>();

    return (
        <section className={styles.block}>
            
            <Headline
                type='section'
                color='black'
            >
                Search For Tour
            </Headline>

            <div className={styles.search_form}>
                <InputSelectList
                    label="Destination"
                    list={[
                        { id: 1, name: "Первый элемент" },
                        { id: 2, name: "Второй элемент" },
                        { id: 3, name: "Третий элемент" },
                        { id: 4, name: "Четвёртый элемент" },
                    ]}
                    selectHandler={(item) => {
                        console.log("Выбранный элемент:", item);
                    }}
                />

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
        </section>
    )
}
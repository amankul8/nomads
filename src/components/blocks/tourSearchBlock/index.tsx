import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import styles from "./tourSearchBlock.module.scss";
import { 
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes,  
    InputDate, 
    InputSelectList, 
    SearchInput, 
    SimpleHeadline, 
} from "@/ui";



interface ITourSearchBlock extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const TourSearchBlock:React.FC<ITourSearchBlock> = () => {
    return (
        <section className={styles.block}>
            
            <SimpleHeadline
                color={headlineColorTypes.black}
                fontFamily={headlineFontFamilyTypes.montserrat}
                tag={headlineTagTypes.h2}
            >
                Search For Tour
            </SimpleHeadline>

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
                
            </div>
        </section>
    )
}
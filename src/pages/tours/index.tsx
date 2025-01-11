import {Layout, FirstBlockLayout} from "@/layouts"
import styles from "./tours.module.scss";
import { DropdownBlock } from "@/layouts/block/dropdown";
import { TourInfoCard } from "@/components/cards";

import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';
import React from "react";

function valueText(value: number) {
  return `${value}°C`;
}

export default function Main() {

  const [duration, setDuration] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newDuration: number | number[]) => {
    setDuration(newDuration as number[]);
  };

  return (
    
    <Layout>
      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
      />

      <section className={styles.wrapper}>
          <div className={styles.sidebar}>
            <DropdownBlock
              title="Duration"
              icon='duration'
            >
              <div className={styles.duration}>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={duration}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={()=>duration.join(',')}
                />
              </Box>
              </div>
            </DropdownBlock>

            <DropdownBlock
              title="Price"
              icon='duration'
            >
              body
            </DropdownBlock>

            <DropdownBlock
              title="Country"
              icon='duration'
            >
              body
            </DropdownBlock>

            <DropdownBlock
              title="Types"
              icon='duration'
            >
              body
            </DropdownBlock>

            <DropdownBlock
              title="Destinations"
              icon='duration'
            >
              body
            </DropdownBlock>

            <DropdownBlock
              title="Activities"
              icon='duration'
            >
              body
            </DropdownBlock>
            <DropdownBlock
              title="Level"
              icon='duration'
            >
              body
            </DropdownBlock>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.content_header}>
              Sort block
            </div>
            <div className={styles.content}>
                {
                  [1,2,3,4,56,32,7,8,6,5,44,3,3].map((item, index) => {
                    return (
                      <TourInfoCard
                        name={"Title"}
                        description={ "Ipsum text"}
                        link={""}
                        image={"https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"}
                        days={ 5}
                        price={ 1000}
                        promotion={30}
                        countries={ ["Kyrgyzstan", "Kazakstan"]}
                        complexity={ 3}
                        rating={3}
                        reviewsCount={73}
                        isList={false}
                      />
                    )
                  })
                }
            </div>
          </div>
      </section>

    </Layout>
  );
};

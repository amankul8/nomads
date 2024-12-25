import React from "react";
import styles from "./PopularToursBlock.module.css";
import { HeaderBlock, headerBlockColorType, headerBlockTourType } from "./headerBlock";
import SliderBlock from "@/components/blocks/sliderBlock";
import { TourInfoCard } from "@/components/cards";

export const PopularToursBlock = ({ind}: {ind: number}):JSX.Element=>{

    return(
        <section className={styles.tours_wrapper}>
            <HeaderBlock
                type={headerBlockTourType.trek}
                color={headerBlockColorType.blue}
                isFirst={ind==0?true:false}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic.'}
                title={'Popular Tours'}
            />
        
            <SliderBlock
                isBg={true}
                bgUrl="https://mcdn.wallpapersafari.com/medium/89/97/gk2A5y.jpg"
                padding={100}
                responsive={[
                    {
                        breakpoint: 2560,
                        settings: {
                          slidesToShow: 5,
                        }
                      },
                    {
                      breakpoint: 1900,
                      settings: {
                        slidesToShow: 4,
                      }
                    },
                  {
                    breakpoint: 1750,
                    settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                      breakpoint: 1250,
                      settings: {
                        slidesToShow: 2,
                      }
                  },
                  {
                      breakpoint: 850,
                      settings: {
                        slidesToShow: 1,
                      }
                  }
                ]}
            >
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
              <div>
                <TourInfoCard
                  name="Title"
                  description="Ipsum text"
                  link=""
                  image="https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
                  days={5}
                  price={1000}
                  promotion={30}
                  countries={['Kyrgyzstan', 'Kazakstan']}
                  complexity={3}
                  rating={3}
                  reviewsCount={73}
                  isList={false}
                />
              </div>
        
            </SliderBlock>
        </section>
    )
}
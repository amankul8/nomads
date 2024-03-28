import styles from "./Destination.module.css";
import {
    headlineColorTypes, 
    headlineFontFamilyTypes, 
    headlineTagTypes, 
    Paragraph, 
    SimpleHeadline, 
    textColor, 
    textFamily, 
    textSize 
} from "@/ui";
import { TripCard1 } from "@/components/cards/TripCard1";
import Gallery from "@/components/blocks/galleryBlock";
import SliderBlock from "@/components/blocks/sliderBlock";
import { Map } from "@/components/blocks/mapBlock";

const images = [
    "https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg",
    "https://mcdn.wallpapersafari.com/medium/90/19/rKHwW9.jpg",
    "https://mcdn.wallpapersafari.com/335/73/19/BF6f7i.jpg",
    "https://mcdn.wallpapersafari.com/medium/51/76/M5Sixv.jpg",
    "https://mcdn.wallpapersafari.com/335/82/70/nv9j5J.jpg",
    "https://mcdn.wallpapersafari.com/medium/9/2/U8jznD.jpg",
    "https://mcdn.wallpapersafari.com/medium/43/23/BpwJ56.jpg",
    "https://mcdn.wallpapersafari.com/335/51/51/sdioGm.jpg",
    "https://mcdn.wallpapersafari.com/medium/64/7/qrZYhn.jpg"

]

export const DestinationContent = ():JSX.Element=>{

    return(
        <>
            <section className={styles.wrapper}>

                <div className={styles.block_wrapper}>
                    <SimpleHeadline
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h3}                        
                    >
                        Kel-Suu
                    </SimpleHeadline>
                    <Paragraph
                        color={textColor.black}
                        fontFamily={textFamily.openSanse}
                        size={textSize.l}
                    >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </Paragraph>
                </div>

                <div className={styles.block_wrapper}>
                    <SimpleHeadline
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h3}                        
                    >
                        Photo
                    </SimpleHeadline>
                    <Gallery images={images}/>
                </div>
                <div className={styles.block_wrapper}>
                    <SimpleHeadline
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h3}                        
                    >
                        Map
                    </SimpleHeadline>
                    <div className={styles.map_block}>
                        <Map/>
                    </div>
                </div>
                <div className={styles.block_wrapper}>
                    <SimpleHeadline
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h3}                     
                    >
                        Tours In this Destinations
                    </SimpleHeadline>
                    
                    <div className={styles.slider_block}>
                        <SliderBlock
                            responsive={[
                                        
                                        {
                                          breakpoint: 2300,
                                          settings: {
                                            slidesToShow: 9,
                                          }
                                        },
                                        {
                                            breakpoint: 2100,
                                            settings: {
                                              slidesToShow: 7,
                                            }
                                        },
                                        {
                                            breakpoint: 1700,
                                            settings: {
                                              slidesToShow: 6,
                                            }
                                        },
                                        {
                                            breakpoint: 1500,
                                            settings: {
                                              slidesToShow: 5,
                                            }
                                        },
                                      {
                                          breakpoint: 1250,
                                          settings: {
                                            slidesToShow: 4,
                                          }
                                      },
                                      {
                                        breakpoint: 1000,
                                        settings: {
                                          slidesToShow: 3,
                                        }
                                      },
                                      {
                                          breakpoint: 800,
                                          settings: {
                                            slidesToShow: 2,
                                          }
                                      },
                                      {
                                          breakpoint: 600,
                                          settings: {
                                            slidesToShow: 1,
                                          }
                                      }
                                    ]}
                        >
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />
                            <TripCard1
                                href="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                imageUrl="https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg"
                                text="sdfsdfsvdf"
                                title="sdfvsdfvsd"
                            />

                        </SliderBlock>
                    </div>
                </div>

            </section>
        </>
    )
}
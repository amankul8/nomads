import { Headline } from "@/ui";
import styles from "./tourContent.module.css";
import Itinerary from "public/icons/headlines/Itinerary.svg";
import MapIcon from "public/icons/headlines/Map.svg";
import Additional from "public/icons/headlines/Additional.svg";
import Photos from "public/icons/headlines/Photos.svg";
import Review from "public/icons/headlines/Review.svg";
import dynamic from "next/dynamic";
import { DayInfoBlock } from "@/components/blocks/tourDetail/dayInfoBlock";
import { TourAdditionalBlock } from "@/components/blocks/tourDetail/additionalBlock";
import { TourReviewBlock } from "@/components/blocks/tourDetail/reviewBlock";

const Map = dynamic(() => import("@/components/blocks/map"), { ssr: false });

export const TourContent = ():JSX.Element=>{


    return(
        <section className={styles.content_wrapper}>
            <div className={styles.itinerary}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <Itinerary/>
                    Itinerary
                </Headline>
                <DayInfoBlock/>
                <DayInfoBlock/>

            </div>
            <div className={styles.map}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <MapIcon/>
                    Map
                </Headline>
                <Map/>
            </div>
            <div className={styles.additional}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <Additional/>
                    Additional Info
                </Headline>

                <TourAdditionalBlock
                    title="Visa"
                    text="Most of countries benefit 60 days visa for free to visit Kyrgyzstan as tourist. In spite of this, check the recommendations given by your Ministry of Foreign Affairs before coming. Also make sure that your passport is valid at least 6 months after your return date"
                />
                <TourAdditionalBlock
                    title="Weaher"
                    text="In summer days are warm but 80% of Kyrgyzstan’s lays above 1500m altitude, Evenings and nights are cool with snowing or freezing in the mountainous areas above 3000m. In case of bad weather conditions that will prevent us to perform some activities, we will do our best to propose alternative activities."
                />
                <TourAdditionalBlock
                    title="Health"
                    text="During the trip, we will do our best to follow the customs regarding body acclimatization in altitude in order to avoid altitude sickness. We will also adapt to your physical condition and rhythm. Despite all these measures, altitude sickness can happen. Travelers could feel headaches, insomnia, loss of appetite, general tiredness or even nausea.
                    Your trip has been also designed to avoid immediate exposition to local food and its preparation methods, because the hygiene standards are not always meeting western ones. In spite of this, as everyone’s body reacts differently, it’s possible to feel the effects of an exotic kitchen.
                    Therefore, it’s strongly recommended to see a doctor, as he (she) is the only one who can prescribe an appropriate travel pharmacy. Besides, a pharmacy will always be available in our vehicles.
                    We kindly ask you to communicate us any medical contraindication or food allergy, so that we will adapt to it,
                    Medical infrastructures out of Bishkek are limited, therefore we strongly recommend our travelers to take travel insurance with repatriation policy."
                />
                <TourAdditionalBlock
                    title="Notes"
                    text="In summer days are warm but 80% of Kyrgyzstan’s lays above 1500m altitude, Evenings and nights are cool with snowing or freezing in the mountainous areas above 3000m. In case of bad weather conditions that will prevent us to perform some activities, we will do our best to propose alternative activities."
                />

            </div>  
            <div className={styles.phots}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <Photos/>
                    Photos
                </Headline>

            </div>
            <div className={styles.reviews}>
                <Headline
                    color='black'
                    type='section'
                    classname={styles.headline}
                >
                    <Review/>
                    Reviews
                </Headline>

                <TourReviewBlock
                    userName="Tony Dja"
                    avatar="https://mcdn.wallpapersafari.com/medium/52/94/bnysNO.jpg"
                    country="Tayland"
                    date="12/05/2022"
                    grade={4.5}
                    tour={'A Perfect Day'}
                    review={'I was in Bishkek, traveling solo, and wanted to visit some nature outside of the city and to see the Burana Tower. This was an excellent option. Ash (with a driver) picked me up and we drove the the Tower, walking around the area. From there we went for an excellent lunch and then horseback riding in a picturesque valley, up to the top of a small mountain. It was all great. Ash was very good company for the day. I enjoyed the company and learning more about Kyrgyzstan. Highly recommended.'}
                />
                <TourReviewBlock
                    userName="Tina Bruny"
                    avatar="https://mcdn.wallpapersafari.com/medium/44/96/4whqng.jpg"
                    country="Tayland"
                    date="12/05/2022"
                    grade={4.5}
                    tour={'A Perfect Day'}
                    review={'I was in Bishkek, traveling solo, and wanted to visit some nature outside of the city and to see the Burana Tower. This was an excellent option. Ash (with a driver) picked me up and we drove the the Tower, walking around the area. From there we went for an excellent lunch and then horseback riding in a picturesque valley, up to the top of a small mountain. It was all great. Ash was very good company for the day. I enjoyed the company and learning more about Kyrgyzstan. Highly recommended.'}
                />
            </div>
        </section>
    )
}

import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "classnames";

import styles from "./whoWeAre.module.scss";
import { WhoWeAreCard } from "@/components/cards";
import { useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";
import { fetchWhoWeAreData, WhoWeAreDataType } from "@/store/models/who_we_are";
import { REVALIDATE_INTERVAL } from "@/config";


export async function getStaticProps() {
  const data = await fetchWhoWeAreData();
  return {
    props: {
      data,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
}

interface IWhoWeAre {
  data: WhoWeAreDataType[]
}

export default function WhoWeAre({data}: IWhoWeAre) {

  const staticData: Record<string, string> = useAppSelector(selectStaticData);
    
  return (
    <Layout>

      <FirstBlockLayout
        bg_image="/images/bg/destinations/image11.jpg"
      >
        <div className={cls('container', styles.main_section)}>

          <div className={styles.content}>
            <Headline color="white" type="main"> Who are we ? </Headline>
            <Paragraph>
              {staticData['who_we_are'] 
                ?? 'LLC Nomads Travel is a dedicated travel agency specializing in crafting unforgettable adventure experiences since 2017. Focused on connecting travelers with the beauty of remote and untouched destinations, we organize small-group tours, tailor-made journeys, and immersive cultural experiences. Each year, we guide hundreds of adventurers in discovering the wonders of unique landscapes, rich traditions, and authentic local cultures. Our team is composed of passionate travel experts who are committed to turning your dreams of exploration into reality. With a strong presence in the destinations we operate, we design our trips from start to finish without relying on intermediaries. This hands-on approach allows us to remain flexible, responsive, and perfectly aligned with the needs of our travelers while ensuring deep knowledge and expertise of the regions we serve. Whether you`re seeking thrilling outdoor adventures, cultural immersion, or a blend of both, LLC Nomads Travel is your trusted partner in delivering unforgettable journeys tailored to your desires.'
              }
            </Paragraph>
          </div>

        </div>
      </FirstBlockLayout>

      <section className={styles.content_section}>
        <div className={cls('container', styles.content)}>
          {
            data && data.map(item => 
              <WhoWeAreCard classname={styles.card} data={item} />
            )
          }
        </div>
      </section>
    </Layout>
  )
}


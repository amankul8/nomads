import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cls from "classnames";

import styles from "./whoWeAre.module.scss";
import { WhoWeAreCard } from "@/components/cards";
import { useAppSelector } from "@/store/hooks";
import { selectStaticData } from "@/store/slices/static_data.slice";
import { fetchWhoWeAreData, WhoWeAreDataSchema } from "@/store/models/who_we_are";
import { REVALIDATE_INTERVAL } from "@/config";
import { v4 as uuidv4 } from 'uuid';
import { z } from "zod";
import Loading from "@/components/loading";
import { NextSeo } from "next-seo";

const WhoWeAreDataExtSchema = WhoWeAreDataSchema.extend({
  key: z.string()
})

type WhoWeAreDataExtType = z.infer<typeof WhoWeAreDataExtSchema>;

export default function WhoWeAre() {

  const staticData: Record<string, string> = useAppSelector(selectStaticData);
  const [status, setStatus] = React.useState<'idle'|'loading'|'successed'|'failed'>('idle');
  const [data, setData] = React.useState<WhoWeAreDataExtType[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {

      setStatus('loading')
      const data = await fetchWhoWeAreData();

      if(!data) {
        setStatus('failed')
        return;
      }

      setData(data.map(item=>{return {...item, key: uuidv4()}}));
      setStatus('successed');
    }

    fetchData();
  }, []);

  if(status == 'loading') return <Loading/>
    
  return (

    <>
      <NextSeo
        title="Who we are | My Website"
        description="Learn more about our team and mission."
        canonical='http://localhost:3000/about-us/who-we-are'
        openGraph={{
          url: 'http://localhost:3000/about-us/who-we-are',
          title: 'Who we are | My Website',
          description: 'Learn more about our team and mission.',
        }}
      />

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
              data && data.map((item) => 
                <WhoWeAreCard classname={styles.card} data={item} key={item.key} />
              )
            }
          </div>
        </section>
      </Layout>
    </>
  )
}


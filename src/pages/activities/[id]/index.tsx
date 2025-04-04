import { FirstBlockLayout, Layout, UniversalBlock } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React from "react";
import cls from "classnames";

import styles from "./activity.module.scss";
import TourSimpleCardSlider from "@/components/sliders/tour/tourSimpleCardSlider";

export async function getStaticPaths() {
//   let destinationsId: number[] = [];
  
//   try {
//     const res = await api.get('destinations');
//     const data = res.data;

//     const result = DestinationSchema.array().safeParse(data);

//     if (result.success) {
//       destinationsId = result.data.map(item => item.id);
//     }
//   } catch (error: any) {
//     destinationsId = [];
//   }

  const paths = [1,2,3,4,5,6,7,8,9].map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    return {
        props: {
          activity: {}, 
        },
        revalidate: 10,
      };
}


const Activity = () => {

    return (
        <Layout>
            <FirstBlockLayout 
                bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"

            >
                <div className={cls('container', styles.main_block_content)}>
                    <Headline color="white" type="main">
                        Activity
                    </Headline>
                </div>
            </FirstBlockLayout>
            <UniversalBlock 
                isBg={false}
                title="Description"
            >
                <Paragraph>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                </Paragraph>
            </UniversalBlock>
            <section className={styles.tours_section}>
                <UniversalBlock 
                    isBg={false}
                >
                    <TourSimpleCardSlider 
                        list={[1,2,3,4,5,6,7,8,9]}
                        isCenteredMode 
                        title="Tours"
                    />
                </UniversalBlock>
            </section>
        </Layout>    
    );
}

Activity.displayName = 'Activity'
export default Activity;
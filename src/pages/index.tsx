import {Layout, FirstBlockLayout, UniversalBlock} from "@/layouts"
import {MainFirstBlock} from '@/components/blocks/index';
import { InfoBlock } from '@/components/blocks/info';
import AttainmentIcon1 from "public/icons/cardIcons/attainmentIcons/icon_1.svg";
import AttainmentIcon2 from "public/icons/cardIcons/attainmentIcons/icon_2.svg";
import AttainmentIcon3 from "public/icons/cardIcons/attainmentIcons/icon_3.svg";
import AttainmentIcon4 from "public/icons/cardIcons/attainmentIcons/icon_4.svg";
import { AttainmentCard } from "@/components/cards/attainmentCard";
import { NumberAttainmentCard } from "@/components/cards/numberAttainmentCard";
import { ReviewBlock } from "@/components/sliders/review";

import styles from "@/styles/home.module.scss";
import { TourSearch,  } from "@/components/blocks";
import {Headline} from "@/ui";

import logo1 from "public/icons/partnersLogos/img1.png"
import logo2 from "public/icons/partnersLogos/img2.png"
import logo3 from "public/icons/partnersLogos/img3.png"
import logo4 from "public/icons/partnersLogos/img4.png"
import logo5 from "public/icons/partnersLogos/img5.png"
import Image from "next/image";
import TourSlider from "@/components/sliders/tour";
import { BlockWithSkirt } from "@/layouts/index";

export interface ISlides{
  id: number,
  title: string,
  description: string,
  image: string
}


const slides: ISlides[] = [
  {
    id: 1,
    title: 'The Virgin Nature 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 1.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 2,
    title: 'The Virgin Nature 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 2 .',
    image: 'https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg',
  },
  {
    id: 3,
    title: 'The Virgin Nature 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 3.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id:4,
    title: 'The Virgin Nature 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 4.',
    image: 'https://mcdn.wallpapersafari.com/medium/17/17/5f7pHi.jpg',
  },
  {
    id: 5,
    title: 'The Virgin Nature 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
  {
    id: 6,
    title: 'The Virgin Nature 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 5.',
    image: 'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg',
  },
]

const attainments = [
  {
    id: 1,
    title: "20 Years Experiences",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.",
    icon: <AttainmentIcon1/>,
  },
  {
    id: 2,
    title: "Lots of gears",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.",
    icon: <AttainmentIcon2/>,
  },
  {
    id: 3,
    title: "Most completed map",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.",
    icon: <AttainmentIcon3/>,
  },
  {
    id: 4,
    title: "Packing Advise",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.",
    icon: <AttainmentIcon4/>,
  },
]

const attainmentInQuantities = [
  {
    id: 1,
    name: 'Awesome hikers',
    quantity: '2000+'
  },
  {
    id: 2,
    name: 'Stunning places',
    quantity: '30+'
  },
  {
    id: 3,
    name: 'Miles to hike',
    quantity: '1000+'
  },
  {
    id: 4,
    name: 'Days in service',
    quantity: '2500'
  },
]

export default function Main() {

  return (
    
    <Layout>

      <FirstBlockLayout
        isFullSize={true}
      >
        <MainFirstBlock slides={slides}/>
      </FirstBlockLayout>

      <TourSearch/>
      
      <InfoBlock 
        title='' 
        text=''
        imageUrl=''
        href=''
      />

      <UniversalBlock
        title="Our experience"
        isBg={true}
      >
        {
          attainments.map(item=>{
            return(
              <AttainmentCard
                title={item.title}
                description={item.description}
                Icon={item.icon}
                key={item.id}
            />
            )
          })
        }
      </UniversalBlock>  

      <InfoBlock 
        title='' 
        text=''
        imageUrl=''
        href=''
        def={true}
      />
      
      <BlockWithSkirt
        image=""
      >
        <TourSlider
          list={slides}
          isCenteredMode
          title="Find our popular tours"
        />
      </BlockWithSkirt>
      
      <UniversalBlock
        title='Our experience in quantitative terms'
      >
        {
          attainmentInQuantities.map(item=>{
            return(
              <NumberAttainmentCard
                name={item.name}
                quantity={item.quantity}
                key={item.id}
            />
            )
          })
        }
      </UniversalBlock> 

      <BlockWithSkirt
        image=""
      >
        <ReviewBlock/>
      </BlockWithSkirt>

      <section className={styles.partners}>
            <Headline
                color='black'
                type='section'
            >
                We are featured in
            </Headline>
            <div className={styles.content}>
                <Image
                    className={styles.logo}
                    src={logo1}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo2}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo3}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo4}
                    alt=""
                />
                <Image
                    className={styles.logo}
                    src={logo5}
                    alt=""
                />
            </div>
        </section>

      <section className={styles.images}>
        <img className={styles.image} src='https://alizila.oss-us-west-1.aliyuncs.com/uploads/2018/02/chinese-tourists_featured.jpg' alt={''} key={'1'}/>
        <img className={styles.image} src='https://static.euronews.com/articles/stories/07/20/09/70/1440x810_cmsv2_9fd3e55d-8994-5043-a421-db603f303be9-7200970.jpg' alt={''} key={'2'}/>
        <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/57/40/lzjXFh.jpg' alt={''} key={'3'}/>
        <img className={styles.image} src='https://mcdn.wallpapersafari.com/medium/0/89/LjaVd1.jpg' alt={''} key={'4'} />
        <img className={styles.image} src='https://www.marketplace.org/wp-content/uploads/2022/05/LastTourist_cropped_nl.jpg?w=1200' alt={''} key={'5'}/>
        <img className={styles.skirt} src={'/icons/blockSkirts/blueBlockSkirt.svg'} alt="" />
      </section>

    </Layout>
  );
};

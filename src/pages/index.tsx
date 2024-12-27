import {Layout, FirstBlockLayout} from "@/layout"
import {MainFirstBlock} from '@/components/blocks/firstBlocks';
import { InfoBlock } from '@/components/blocks/InfoBlocks';
import { UniversalBlockItems } from "@/components/blocks/universalBlockItems";
import { BlockLayout } from "@/layout/blockLayout";
import AttainmentIcon1 from "public/icons/cardIcons/attainmentIcons/icon_1.svg";
import AttainmentIcon2 from "public/icons/cardIcons/attainmentIcons/icon_2.svg";
import AttainmentIcon3 from "public/icons/cardIcons/attainmentIcons/icon_3.svg";
import AttainmentIcon4 from "public/icons/cardIcons/attainmentIcons/icon_4.svg";
import { AttainmentCard } from "@/components/cards/attainmentCard";
import { NumberAttainmentCard } from "@/components/cards/numberAttainmentCard";
import { ReviewBlock } from "@/components/blocks/reviewBlock";
import { PartnersBlock } from "@/components/blocks/partnersBlock";
import { ImagesBlock } from "@/components/blocks/imagesBlock";

import {TourSimpleCard, TourInfoCard} from '@/components/cards/index';
import styles from "@/styles/home.module.scss";
import { TourSearchBlock } from "@/components/blocks";

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
  }
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

      <FirstBlockLayout>
        <MainFirstBlock slides={slides}/>
      </FirstBlockLayout>

      <TourSearchBlock/>
      
      <InfoBlock 
        title='' 
        text=''
        imageUrl=''
        href=''
      />

      <UniversalBlockItems
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
      </UniversalBlockItems>  

      <InfoBlock 
        title='' 
        text=''
        imageUrl=''
        href=''
      />
      
      <BlockLayout>
        <UniversalBlockItems
          title='Find Our Populer Tours'
          isBg={true}
        >  
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

        </UniversalBlockItems>
      </BlockLayout>
      <UniversalBlockItems
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
      </UniversalBlockItems> 
      <BlockLayout>
        <ReviewBlock/>
      </BlockLayout>
      <PartnersBlock/>
      <ImagesBlock/>
      
      <TourSimpleCard
        name = "Title"
        description = "Text"
        link = ''
        complexity = {12}
        image = "https://cdn.wallpapersafari.com/43/71/H9wItm.jpg"
      />

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

    </Layout>
  );
};

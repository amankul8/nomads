import styles from "@/styles/Main.module.css";
import { Layout } from '@/layout/layout/Layout';
import { InfoBlock } from '@/components/blocks/InfoBlock';
import { TripCard2 } from '@/components/cards/TripCard2';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { Button, btnArrowType, btnBorderSizeType, btnColorType, btnViewType, itemTypes} from "@/ui";
import {Item, itemTextColorTypes, itemTextSizeTypes} from "@/ui";
import Icon from "public/icons/socialMediaIcons/youtube.svg";


export default function Main() {
  return (
    <main className={styles.wrapper}>
        <Layout>

          <InfoBlock 
            title='' 
            text=''
            imageUrl=''
            href=''
            />

          <TripCard2 />
          <ReviewCard/>

          
          <div style={{padding: '20px', background:'orange'}}>
           
            <Item
              active={true}
              itemTextColor={itemTextColorTypes.red}
              itemTextSize={itemTextSizeTypes.s}
            > Hotels & Lodges </Item>
            <br/>
            <br/>
            <Item
              itemTextColor={itemTextColorTypes.blue}
            > Hotels & Lodges</Item>
            <br/>
            <br/>
            <Item
              itemTextColor={itemTextColorTypes.white}
              itemTextSize={itemTextSizeTypes.l}
            > Hotels & Lodges</Item>
            <br/>
            <br/>
            <Item
              itemTextColor={itemTextColorTypes.white}
              item={itemTypes.itemWithIcon}
            > 
              <Icon/>
              Hotels & Lodges
            </Item>
            <br/>
            <br/>
            <Item
              itemTextColor={itemTextColorTypes.blue}
              itemTextSize={itemTextSizeTypes.l}
              item={itemTypes.itemWithIcon}
            > 
              <Icon/>
              Hotels & Lodges
            </Item>
            <br/>
            <br/>
            <Item
              itemTextColor={itemTextColorTypes.red}
              itemTextSize={itemTextSizeTypes.s}
              item={itemTypes.itemWithIcon}
            > 
              <Icon/>
              Hotels & Lodges
            </Item>

          </div>

          

        </Layout>
    </main>
  );
};

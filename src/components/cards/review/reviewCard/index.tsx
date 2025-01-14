import { Paragraph, Headline } from "@/ui";
import { Rating } from "@/ui";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ReviewCard.module.css";
import KGMapIcon from "@/components/icons/general/miniKgMap.svg";

interface IReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{

}

export const ReviewCard = ({}:IReviewCardProps):JSX.Element=>{

    return(
        <div 
            className={styles.card_wrapper}
        >
            <Image
                src={'https://mcdn.wallpapersafari.com/medium/74/96/E4cAIg.jpg'}
                className={styles.bg}
                width={1920}
                height={1080}
                alt={''}
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <KGMapIcon/>
                </div>
                <div className={styles.right}>
                    <Headline
                        color='white'
                        type='subsection'
                    >
                        Askat Taalaibekov, Kyrgyzstan 23
                    </Headline>
                    <Paragraph
                        classname={styles.review}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, tempore earum. Laborum minima cumque cum ipsa neque blanditiis fugit dolor est nisi officia accusantium, recusandae mollitia quis alias totam rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, tempore earum. 
                    </Paragraph>
                    <Rating 
                        type="star"
                        color='white'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

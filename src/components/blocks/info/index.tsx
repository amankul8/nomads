import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./InfoBlock.module.scss";
import Image from "next/image";
import cn from "classnames";

import TerrainIcon from '@mui/icons-material/Terrain';

import { 
    Headline,
    Paragraph,
    CustomButton
} from "@/ui";

interface IInfoBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    title: string,
    text: string,
    imageUrl: string,
    href: string,
    def?: boolean | undefined
}

export const InfoBlock: React.FC<IInfoBlockProps> = ({title, text, imageUrl, href, def, ...props}) => {

    return(
        <section className={cn(styles.wrapper, {
            [styles.reverse]: def
        })}>
            <div className={cn('container', styles.container)}>
                <div className={styles.text_wrapper}>
                    <TerrainIcon className={styles.icon}/>
                    <Headline 
                        type="section"
                        color='black'
                        underline={true}
                        classname={styles.h}
                    >
                        We are featured in
                    </Headline>
                    <Paragraph>
                        The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight 
                        Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia.
                        
                    </Paragraph>
                    
                    <CustomButton
                        color="blue"
                        handler={()=>{}}
                    >
                        Discover
                    </CustomButton>
                </div>
                <div className={cn(styles.image_wrapper)}>
                    <Image
                        src={'https://cdn.wallpapersafari.com/43/71/H9wItm.jpg'}
                        alt={''}
                        width={1920}
                        height={1080}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    )
}
import { Span} from "@/ui";
import { ReactNode } from "react";
import styles from "./InfoSticker.module.css";

interface IInfoSticker{
    Icon: React.FC,
    children: ReactNode
}

export const InfoSticker = ({Icon, children}:IInfoSticker)=>{

    return(
        <div className={styles.wrapper}>
            <Icon/>
            <Span 
              classname={styles.text}
            >
                {children}
            </Span>
        </div>
    )
}
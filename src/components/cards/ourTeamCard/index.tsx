import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './ourTeamCard.module.scss';
import cls from "classnames";
import { Headline, Paragraph } from "@/ui";
import Image from "next/image";
import Ornament from "@/components/icons/general/ornament.svg"

 
interface IOurTeamCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classname?: string
}

export const OurTeamCard:React.FC<IOurTeamCard> = ({classname, ...props}) => {
    return (
        <div>

        </div>
    )
}
import { Headline } from "@/ui";
import Image from "next/image";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./destinationCard.module.css";
import Link from "next/link";

interface IDescriptionCard extends Omit<HTMLAttributes<HTMLDivElement>, "id"> {
    id: number;
    name: string;
    image: string;
}

export const DestinationCard: React.FC<IDescriptionCard> = ({ id, name, image, ...rest }) => {
    return (
        <Link className={styles.card} href={`/destinations/${id}`} passHref>
            <figure className={styles.figure} {...rest}>
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    alt={name}
                    className={styles.bg}
                    priority
                />
                <div className={styles.content}>
                    <Headline color="white" type="normal">
                        {name}
                    </Headline>
                </div>
            </figure>
        </Link>
    );
};
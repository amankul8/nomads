'use client';

import { Headline, Paragraph, Rating } from "@/ui";
import styles from "./reviewInfoCard.module.scss";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { TourReviewType } from "@/store/models/tours/types";
import { FallbackImage } from "../../image/FallbackImage";
import { format, parseISO } from "date-fns";

type ReviewInfoCardProps = {
    review: TourReviewType;
};

export const ReviewInfoCard = ({ review }: ReviewInfoCardProps) => {
    const [visibleImages, setVisibleImages] = useState<Array<{ url: string; alt: string }>>([]);

    const updateImages = useCallback(() => {
        const count = window.innerWidth > 768 ? 4 : 2;
        setVisibleImages(review.images.slice(0, count));
    }, [review.images]);

    useEffect(() => {
        updateImages();
        window.addEventListener("resize", updateImages);
        return () => window.removeEventListener("resize", updateImages);
    }, [updateImages]);

    const totalImages = review.images.length;
    const hiddenImageCount = totalImages - visibleImages.length;

    return (
        <div className={styles.card}>
            <div className={styles.topbar}>
                <div className={styles.left_side}>
                    <div className={styles.user}>
                        <Image
                            className={styles.avatar}
                            src='https://mcdn.wallpapersafari.com/medium/25/61/wnkqoS.jpg'
                            width={48}
                            height={48}
                            alt='User Avatar'
                            loading='lazy'
                        />
                        <div className={styles.name}>
                            <Headline color="black" type="normal"> {review.user.first_name} {review.user.last_name} </Headline>
                            <Paragraph> {format(parseISO(review.tour_date), 'yyyy-MM-dd')} </Paragraph>
                        </div>
                    </div>
                </div>

                <div className={styles.right_side}>
                    <span>
                        <Paragraph>Accommodation:</Paragraph>
                        <Rating rating={review.details.accommodation} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph>Entertainment:</Paragraph>
                        <Rating rating={review.details.entertainment} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph>Food:</Paragraph>
                        <Rating rating={review.details.food} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph>Guide:</Paragraph>
                        <Rating rating={review.details.guide} type="star" color="blue" />
                    </span>
                    <span>
                        <Paragraph>Vehicle:</Paragraph>
                        <Rating rating={review.details.vehicle} type="star" color="blue" />
                    </span>
                </div>
            </div>

            <Paragraph>{review.description}</Paragraph>

            {visibleImages.length > 0 && (
                <div className={styles.images}>
                    {visibleImages.map((image, index) => (
                        <figure className={styles.image} key={index}>
                            <FallbackImage
                                src={image.url}
                                width={300}
                                height={200}
                                alt={image.alt || `Image ${index + 1}`}
                                loading="lazy"
                            />
                            {index === visibleImages.length - 1 && (
                                <div className={styles.img_layer}>+ {hiddenImageCount} more</div>
                            )}
                        </figure>
                    ))}
                </div>
            )}
        </div>
    );
};

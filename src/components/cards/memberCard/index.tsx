import { FC, useEffect, useRef, useState } from 'react';
import styles from './member.module.scss'
import cls from 'classnames';
import { Headline, Paragraph } from '@/ui';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import Slider from "react-slick";
import TourSimpleCardSlider from '@/components/sliders/tour/tourSimpleCardSlider';
import DestinationsCardSlider from '@/components/sliders/tour/destinationsCardSlider';

export interface ITeamMember {
    id: number,
    name: string,
    image: string,
    slogan: string,
    history: string,
    destination: {
        id: number,
        name: string,
        image: string,
        country: string,
        description: string
    },
}

interface ITeamMemberProps {
    member: ITeamMember | null,
    handleClose: ()=>void
}

const TeamMemberPage: FC<ITeamMemberProps> = ({member, handleClose, ...props}) => {

    const sliderContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className={styles.section} {...props}>
            <div className={cls('container', styles.container)} ref={sliderContainerRef}>

                <div className={styles.back}>
                    <div className={styles.btn} onClick={handleClose}>
                        <CloseIcon/>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.name}>
                        <Headline color='black' type='main'> User name </Headline>
                        <Headline color='blue' type='normal'> Locarion </Headline>
                    </div>
                    <div className={styles.slogan}>
                        <div className={styles.text}>
                            <Headline color='black' type='subsection'> 
                                Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.
                            </Headline>
                        </div>
                    </div> 
                    <div className={styles.photo}>
                        <div className={styles.card}>
                            <figure>
                                <Image
                                    src={'/images/bg/nature_bg.jpg'}
                                    width={1920}
                                    height={1080}
                                    alt=''
                                />
                            </figure>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <Headline color='black' type='section'> 
                            Short History
                        </Headline>
                        <div className={styles.text}>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                            </Paragraph>
                        </div>
                    </div>

                </div>

                <DestinationsCardSlider
                    title='Favorite destinations'
                    list={[1,2,3,4,5,6,7,8,9]}
                />

                <TourSimpleCardSlider
                    list = {[1,2,3,4,5,6,5,6,]}
                    title='Favorite Tours:'
                    isCenteredMode={true}
                />

            </div>
        </section>
    );
    };


    export default TeamMemberPage;
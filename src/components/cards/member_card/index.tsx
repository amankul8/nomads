import { forwardRef, useRef } from 'react';
import styles from './member.module.scss';
import cls from 'classnames';
import { Headline, Paragraph } from '@/ui';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import TourSimpleCardSlider from '@/components/sliders/tour/tourSimpleCardSlider';
import { useAppSelector } from '@/store/hooks';
import { selectPopularTours } from '@/store/slices/tours.slice';

export interface ITeamMember {
    id: number;
    name: string;
    image: string;
    slogan: string;
    history: string;
    destination: {
        id: number;
        name: string;
        image: string;
        country: string;
        description: string;
    };
}

interface ITeamMemberProps {
    member: ITeamMember | null;
    handleClose: () => void;
}

const TeamMemberPage = forwardRef<HTMLDivElement, ITeamMemberProps>(
    ({ member, handleClose }, ref) => {

        const sliderContainerRef = useRef<HTMLDivElement>(null);
        const tours = useAppSelector(selectPopularTours);

        return (
            <section className={styles.section} ref={ref} tabIndex={-1}>
                <div className={cls('container', styles.container)} ref={sliderContainerRef}>
                    <div className={styles.back}>
                        <div className={styles.btn} onClick={handleClose}>
                            <CloseIcon />
                        </div>
                    </div>

                    <div className={styles.main}>
                        <div className={styles.name}>
                            <Headline color='black' type='main'>User name</Headline>
                            <Headline color='blue' type='normal'>Location</Headline>
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
                            <Headline color='black' type='section'>Short History</Headline>
                            <div className={styles.text}>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </Paragraph>
                            </div>
                        </div>
                    </div>

                    {tours && tours.length > 0
                        ? <TourSimpleCardSlider
                            list={[...tours]}
                            isCenteredMode={true}
                            title="Tours"
                        /> :
                        null
                    }
                </div>
            </section>
        );
    }
);

TeamMemberPage.displayName = 'TeamMemberPage'; // ⚠️ важно для devtools и HMR

export default TeamMemberPage;

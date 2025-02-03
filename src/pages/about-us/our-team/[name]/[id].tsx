import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './member.module.scss'
import { Footer } from '@/modules';
import cls from 'classnames';
import { CustomIconButton, Headline, Paragraph } from '@/ui';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  id: string;
}

const TeamMemberPage: FC<TeamMemberProps> = ({ name, id }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <section className={styles.section}>
            <div className={cls('container', styles.container)}>

                <div className={styles.back}>
                    <CustomIconButton
                        color='blue'
                        shape='square'
                        type='back'
                        handler={()=>{}}
                    />
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
                    <div className={styles.destination}>
                        <Headline color='black' type='section'> 
                            Favorite Destinations
                        </Headline>
                    </div>
                </div>

                <div className={styles.slider}>
                     
                </div>
            </div>
        </section>

        <Footer/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<TeamMemberProps> = async (context) => {
  const { name, id } = context.params as { name: string; id: string };

  return {
    props: { name, id },
  };
};

export default TeamMemberPage;

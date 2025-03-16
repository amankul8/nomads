import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { useEffect, useState } from "react";
import cls from "classnames";

import styles from "./ourTeam.module.scss";
import { OurTeamCard } from "@/components/cards";
import { ITeamMember } from "./member"
import TeamMemberPage from "./member";

import Modal from '@mui/material/Modal';

import {lockScroll, unlockScroll} from '@/helpers';

const teamMembers: ITeamMember[] = [
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
  {
    id: 1,
    name: "Member name",
    slogan: "Путешествовать — значит видеть мир таким, какой он есть, а не таким, каким нам хотелось бы его видеть.",
    image: "/images/bg/nature_bg.jpg",
    history: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    destination: {
      id: 1,
      name: "Kel-Suu",
      image: "/images/bg/nature_bg.jpg",
      country: "Kyrgyzstan",
      description: "aslkdaklj fkaljs kasjf laksjfakl sjflksjh kasjh kasjf lksajhlaks jnaksjhvl kajsdhlak sjdvhask"
    }
  },
];

export default function OurTeam() {

  const [teamMember, setTeamMember] = useState<ITeamMember | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleTeamMemberShow = (member: ITeamMember) => {
    setTeamMember(member);
    handleModalOpen();
  }

  useEffect(() => {
    if (showModal) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [showModal]);
    
  return (
    <Layout
      
    >

      <FirstBlockLayout
        bg_image="/images/bg/destinations/image6.jpg"
      >
        <div className={cls('container', styles.main_section)}>

          <div className={styles.content}>
            <Headline color="white" type="main"> Our team </Headline>
            <Paragraph>
              LLC Nomads Travel is a dedicated travel agency specializing in crafting unforgettable adventure experiences since 2017. Focused on connecting travelers with the beauty of remote and untouched destinations, we organize small-group tours, tailor-made journeys, and immersive cultural experiences. Each year, we guide hundreds of adventurers in discovering the wonders of unique landscapes, rich traditions, and authentic local cultures. Our team is composed of passionate travel experts who are committed to turning your dreams of exploration into reality. With a strong presence in the destinations we operate, we design our trips from start to finish without relying on intermediaries. This hands-on approach allows us to remain flexible, responsive, and perfectly aligned with the needs of our travelers while ensuring deep knowledge and expertise of the regions we serve. Whether you're seeking thrilling outdoor adventures, cultural immersion, or a blend of both, LLC Nomads Travel is your trusted partner in delivering unforgettable journeys tailored to your desires.
            </Paragraph>
          </div>

        </div>
      </FirstBlockLayout>

      <OurTeamCard members={teamMembers} hanldeMember={handleTeamMemberShow}/>
      <OurTeamCard members={teamMembers} reverse={true} hanldeMember={handleTeamMemberShow}/>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        disableScrollLock={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TeamMemberPage
          member={teamMember}
          handleClose={handleModalClose}
        />
      </Modal>
    
    </Layout>
  )
}


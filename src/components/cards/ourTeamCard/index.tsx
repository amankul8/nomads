"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ourTeamCard.module.scss";
import cls from "classnames";
import Image from "next/image";
import { Headline, Paragraph } from "@/ui";
import {ITeamMember} from "@/pages/about-us/our-team/member";

interface IOurTeamCard {
  members: ITeamMember[],
  hanldeMember: (member: ITeamMember)=>void,
  reverse?: boolean
}

const emptyPoints = [0, 1, 2, 3, 5, 6, 7, 8];

export const OurTeamCard: React.FC<IOurTeamCard> = ({ members, hanldeMember, reverse }) => {
  const [teamGridHeight, setTeamGridHeight] = useState(0);
  const teamGridElement = useRef<HTMLDivElement>(null);

  // Функция для установки высоты контейнера
  const handleResize = useCallback(() => {
    if (teamGridElement.current) {
      setTeamGridHeight(teamGridElement.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const joinedList = (points: number[], members: ITeamMember[]) => {
    let index = 0
    let newList:Array<ITeamMember | null> = [];

    const count = points.length + members.length;

    for(let i=0; i<count; i++) {
        if(points.includes(i)) {
            newList.push(null);
        }
        else {
            newList.push(members[index]);
            index++
        }
    }

    return newList;
  }

  return (
    <section className={cls("container", styles.team_section, {
        [styles.reverse]: reverse
    }
    )} style={{ height: teamGridHeight }}>
      <div className={styles.text_wrapper}>
        <div className={styles.text_content}>
          <Headline color="blue" type="normal">
            The Team
          </Headline>
          <Headline color="black" type="section">
            Encadrement
          </Headline>
          <Paragraph>
            Passionnés par l&apos;Arctique dont ils sont spécialistes, nos guides 66°Nord sont tous des professionnels de
            l&apos;encadrement, afin de vous permettre de profiter de votre séjour en toute sécurité dans cet univers
            sauvage. Amoureux de la nature et respectueux de l&apos;environnement, ils sauront vous transmettre leurs
            connaissances du pays : sa faune, sa flore et son histoire. Enfilez vos chaussures de marche et laissez-vous
            guider !
          </Paragraph>
        </div>
      </div>

      <div className={styles.team_grid} ref={teamGridElement}>
        {joinedList(emptyPoints, members).map((item, index) =>
          item === null ? (
            <div key={index} className={styles.grid_item} />
          ) : (
            <div key={index} className={styles.grid_item} onClick={()=>hanldeMember(item)}>
              <div className={styles.grid_item_inner}>

                <div className={styles.text}>
                  <Headline color="white" type="normal"> {item.name} </Headline>
                </div>

                <figure className={styles.figure}>
                  <Image src={item.image} height={1080} width={1920} alt={`Team member ${index + 1}`} />
                </figure>

              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

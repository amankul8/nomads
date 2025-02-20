import React, { useEffect, useState } from "react";
import styles from "./subheader.module.css";
import {ISubheader} from "@/components/content";
import cn from "classnames";
import {AnimatePresence, motion, Variants} from "motion/react";
import { Paragraph, Headline} from "@/ui";
import OrnamentIcon from '@/components/icons/general/ornament.svg';
import Compass from "./svg/compass.svg";
import CheckFlights from "./svg/checkFlights.svg";
import Link from "next/link";

export const SubHeaderContent = ({data, name, className, isMouseOver, bg_image, ...props}:ISubheader) => {

    const [currentBg, setCurrentBg] = useState<string>(bg_image);

    const listVariants: Variants = {
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1, // Задержка между появлением элементов
          },
        },
        hidden: {
          opacity: 0,
        },
      };
    
    const listItemVariants: Variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    };

    const handleMouseOver = (newBg: string = bg_image) => {
        console.log(newBg);
        if(newBg != null && newBg != '') setCurrentBg(prev => newBg);
        else setCurrentBg(prev => bg_image);
    }

    const handleMouseOut = () => {
        setCurrentBg(prev => bg_image);
    }

    switch(name){
        case 'Destinations':
        case 'Activities & Tours':
        case 'Accommodations':
        case 'Useful Info':
            return(
                <div
                    className={cn(
                        styles.subheader_content_wrapper,
                        styles.classnames,
                    )}
                    {...props}
                >
                    <AnimatePresence>
                        <motion.img
                            key={currentBg}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.bg}
                            src={currentBg}
                            alt=""
                        />
                    </AnimatePresence>

                    <motion.ul
                        layout
                        initial={"hidden"}
                        animate={isMouseOver?"visible":"hidden"}
                        variants={listVariants}
                        className={styles.content_for_list}
                    >
                        {
                            data?.map(item=>{
                                return(
                                    <motion.li 
                                        layout
                                        key={item.id} 
                                        variants={listItemVariants}
                                        transition={{
                                            ease: "linear",
                                            duration: .5
                                        }}
                                        className={styles.item}
                                    >
                                        {
                                            name==='Destinations'?
                                            <Link href={"#"} >
                                                <Headline
                                                    type='section'
                                                    color='white'
                                                >
                                                
                                                    {item.name}
                                                </Headline>
                                            </Link>:
                                            <Link href={"#"} className={styles.a}
                                                onMouseOver={e => handleMouseOver(item.image)} 
                                                onMouseOut={() => handleMouseOut()}
                                            >
                                                <div>
                                                    <OrnamentIcon/>
                                                    {item.name}
                                                </div>
                                            </Link>
                                        }
                                    </motion.li>
                                )
                            })
                        }
                    </motion.ul>
                </div>
            )
        case 'Trip planner':
        case 'Our map':
        case 'Check flights': 
            return(
                <div
                    className={cn(
                        styles.subheader_content_wrapper,
                        styles.trip_planner,
                        styles.classnames
                    )}
                    style={{backgroundImage:`url(${bg_image})`}}
                    {...props}
                >
                    <div className={styles.content_for_block}>
                        <motion.div
                            layout 
                            initial={{opacity: 0}}
                            animate={isMouseOver?{opacity: 1}:{opacity: 0}}
                            transition={{
                                ease: 'linear',
                                duration: 1
                            }}
                            className={styles.block_wrapper}
                        >
                            <div className={styles.left}>
                                {
                                    name === 'Check flights'?
                                    <CheckFlights/>:
                                    <Compass/>
                                }
                            </div>
                            <div className={styles.right}>
                                <Headline
                                    type='section'
                                    color='white'
                                    classname={styles.title}
                                >
                                    {name}
                                </Headline>
                                <Paragraph
                                    classname={styles.text}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic.
                                </Paragraph>
                                {/* <Button
                                    btnColor={btnColorType.white}
                                    btnSize={btnBorderSizeType.l}
                                    btnView={btnViewType.button}
                                    classname={styles.button}
                                >
                                    Discover
                                </Button> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            )
        default: 
                return <></>
    }
}
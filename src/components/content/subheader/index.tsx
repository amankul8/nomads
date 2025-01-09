import React, { useEffect, useState } from "react";
import styles from "./subheader.module.css";
import {ISubheader} from "@/components/content";
import cn from "classnames";
import {motion, Variants} from "framer-motion";
import { NavbarItem, Paragraph, Headline} from "@/ui";
import OrnamentIcon from 'public/icons/listMarkers/ornament.svg';
import Compass from "./svg/compass.svg";
import CheckFlights from "./svg/checkFlights.svg";
import Link from "next/link";

export const SubHeaderContent = ({data, name, className, isMouseOver, bg_image, ...props}:ISubheader):JSX.Element=>{

    const [bg, setBg] = useState('');
    const [onHover, setOnHover] = useState(false);

    const bgVariants: Variants = {
        visible: {
            opacity: 1,
        },

        hidden: {
            opacity: 0,
        }
    }

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
                    style={{backgroundImage:`url(${bg_image})`}}
                    {...props}
                >
                    <motion.img
                        layout
                        animate={onHover?'visible':'hidden'}
                        transition={{
                            ease: "linear",
                            duration: .3
                        }}
                        variants={bgVariants}
                        className={styles.bg}
                        src={bg===''?`${bg_image}`:`${bg}`}
                        alt={''}
                    />
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
                                            <Link href={"#"} 
                                                onMouseOver={e=>{
                                                    setBg(item.image);
                                                    setOnHover(true);
                                                }}
                                                onMouseOut={()=>{
                                                    setOnHover(false);
                                                }}
                                            >
                                                <Headline
                                                    type='section'
                                                    color='white'
                                                >
                                                
                                                    {item.name}
                                                </Headline>
                                            </Link>:
                                            <Link href={"#"} className={styles.a}
                                                onMouseOver={e=>{
                                                    setBg(item.image);
                                                    setOnHover(true);
                                                }}
                                                onMouseOut={()=>{
                                                    setOnHover(false);
                                                }}
                                            >
                                                <NavbarItem
                                                    item={true}
                                                    color='white'
                                                    classname={styles.item_text}
                                                >
                                                    <OrnamentIcon/>
                                                    {item.name}
                                                </NavbarItem>
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
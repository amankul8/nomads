import React, { Dispatch, useState } from "react";
import styles from "./SelectList.module.css";
import {motion} from "framer-motion";

interface ISelect{
    selectHandler?: React.Dispatch<React.SetStateAction<any>>,
    list?: string[],
    label: string,
    className?:string
}

export const SelectList = ({list, label, className, selectHandler}:ISelect):JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    const arr = [1,2,3,4,5, 4,4,5,6,7,8,9,0];

    const list_container={
        visible: {
            opacity: 1,
            transform: 'scaleY(1)',
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        hidden: {
            opacity: 0,
            transform: 'scaleY(0)',
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    }
    
    const itemVariants={
        hidden:{
            y: -50,
            opacity: 0,
            transition: {
            y: { stiffness: 1000 }
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    }


    // --------List handlers---------------------

    const openListHandler = (e:React.MouseEvent)=>{
        setIsOpen(!isOpen);
    }

    const selectListHandler = (e:React.MouseEvent)=>{
        
    }

    return(
        <div 
            className={styles.select+ ' '+className}
        >
            <div className={styles.label + ' ' +styles.list} onClick={openListHandler}> 
                <span>
                    {label}
                </span> 
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.71875 0.46875C7.77083 0.520833 7.79688 0.580729 7.79688 0.648438C7.79688 0.716146 7.77083 0.776042 7.71875 0.828125L4.07812 4.46875C4.02604 4.52083 3.96615 4.54688 3.89844 4.54688C3.83073 4.54688 3.77083 4.52083 3.71875 4.46875L0.078125 0.828125C0.0260417 0.776042 0 0.716146 0 0.648438C0 0.580729 0.0260417 0.520833 0.078125 0.46875L0.46875 0.078125C0.520833 0.0260415 0.580729 0 0.648438 0C0.716146 0 0.776042 0.0260415 0.828125 0.078125L3.89844 3.14844L6.96875 0.078125C7.02083 0.0260415 7.08073 0 7.14844 0C7.21615 0 7.27604 0.0260415 7.32812 0.078125L7.71875 0.46875Z" fill="#0083E6"/>
                </svg>
            </div>

            <motion.ul
                layout
                initial={'hidden'}
                animate={isOpen ? 'visible' : 'hidden'}
                variants={list_container}
                className={styles.ul}
            >
                {arr.map((item, index) => (
                    <motion.li 
                        key={index}
                        initial={'hidden'}
                        animate={isOpen ? 'visible' : 'hidden'}
                        variants={itemVariants}
                        className={styles.li}
                    >
                        asdsa a sdsd {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )        
}
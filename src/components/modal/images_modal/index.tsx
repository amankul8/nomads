import React from "react";
import styles from './images.module.scss';
import Modal from '@mui/material/Modal';
import { AnimatePresence, motion } from "motion/react"
import cls from 'classnames';
import { BASE_IMAGE_ULR } from "@/config";

type Image = {
    url: string,
    alt?: string
}

interface IImagesModal {
    images: Image[], 
    isVisible: boolean
    ind: number,
    handlerModalClose: () => void
}

export const ImagesModal:React.FC<IImagesModal> = ({images, ind, isVisible, handlerModalClose}) => {

    const [currImageIndex, setCurrImageIndex] = React.useState<number>(ind);

    return (
        <Modal
            open={isVisible}
            onClose={handlerModalClose}
            disableScrollLock={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal_window}
        >
            <div className={cls("container", styles.content)}>
            <figure className={styles.figure}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[currImageIndex].url}
                        initial={{opacity: 0, x: '100%'}}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.1,
                                type: "spring",
                                visualDuration: 0.3,
                                bounce: 0.2,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            x: '-100%'
                        }}
                        transition={{ duration: .3}}
                        src={BASE_IMAGE_ULR + images[currImageIndex].url}
                        alt=""
                    />
                </AnimatePresence>
            </figure>

            <motion.div 
                className={styles.slider}
            >
                {
                    images.map((item, index) => (
                    <motion.img
                        className={cls( styles.img, {
                            [styles.selected]: images[currImageIndex].url == item.url 
                        })}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        src={BASE_IMAGE_ULR + item.url}
                        alt=""
                        onClick={()=>setCurrImageIndex(index)}
                        key={item.url}
                    />
                    ))
                }
            </motion.div>

            </div>  
        </Modal>
    )
}
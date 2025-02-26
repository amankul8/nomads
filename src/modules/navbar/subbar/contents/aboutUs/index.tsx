import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { AnimatePresence, motion} from "framer-motion";
import { CustomButton, Headline, Paragraph } from "@/ui";
import { useRouter } from "next/navigation";

export const AboutUsContent = () => {

    const router = useRouter();

    return (
        <motion.div
            className={cn('container', styles.content)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit="hidden"
            transition={{ duration: 1 }}
        >
            <div className={styles.block}>
                <Headline color="white" type="section">
                    Untouched Nature
                </Headline>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic.
                </Paragraph>
                <CustomButton color="white" handler={() => router.push('/about-us/who-we-are')}>
                    Discover
                </CustomButton>
            </div>
            <div className={styles.block}>
                <Headline color="white" type="section">
                    Untouched Nature
                </Headline>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic.
                </Paragraph>
                <CustomButton color="white" handler={() => router.push('/about-us/who-we-are')}>
                    Discover
                </CustomButton>
            </div>
        </motion.div>
    )
}
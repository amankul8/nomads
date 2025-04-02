import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { AnimatePresence, motion} from "framer-motion";
import { CustomButton, Headline, Paragraph } from "@/ui";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";

export const AboutUsContent = () => {

    const staticData: Record<string, string> = useAppSelector(selectStaticData);

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
                    Who we are?
                </Headline>
                <Paragraph>
                    {staticData['who_we_are_short'] ?? ''}
                </Paragraph>
                <CustomButton color="white" handler={() => router.push('/about-us/who-we-are')}>
                    Discover
                </CustomButton>
            </div>
            <div className={styles.block}>
                <Headline color="white" type="section">
                    Our team
                </Headline>
                <Paragraph>
                    {staticData['our_team_short'] ?? ''}
                </Paragraph>
                <CustomButton color="white" handler={() => router.push('/about-us/our-team')}>
                    Discover
                </CustomButton>
            </div>
        </motion.div>
    )
}
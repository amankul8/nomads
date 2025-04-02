import React from "react";
import styles from "./styles.module.scss";
import { AnimatePresence, motion} from "framer-motion";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { CustomButton, Headline, Paragraph } from "@/ui";
import Image from "next/image";
import { useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";

export const UsefulContent = () => {

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
                <Image
                    src='/images/general/useful.png'
                    width={400}
                    height={330}
                    alt=""
                />
            </div>
            <div className={styles.block}>
                <Headline color="white" type="section">
                    Untouched Nature
                </Headline>
                <Paragraph>
                    {staticData['who_we_are_short'] ?? ''}
                </Paragraph>
                <CustomButton color="white" handler={() => router.push('/useful-info')}>
                    Discover
                </CustomButton>
            </div>
        </motion.div>
    )
}
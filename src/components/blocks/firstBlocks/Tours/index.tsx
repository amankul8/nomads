import {FirstBlockLayout} from "@/layout";
import { headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, SimpleHeadline } from "@/ui";
import styles from "./Tours.module.css";

export function ToursFirstBlock() {

  return (
    <FirstBlockLayout
        bg_image="https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg"
    >
        <div className={styles.content_wrapper}>
          <SimpleHeadline
            color={headlineColorTypes.white}
            fontFamily={headlineFontFamilyTypes.caveatBrush}
            tag={headlineTagTypes.h1}
            classname={styles.text}
          >
            {"Go places you've dreamed of."}
          </SimpleHeadline>
        </div>
    </FirstBlockLayout>
  );
};


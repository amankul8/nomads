import {FirstBlockLayout} from "@/layouts";
import { Headline } from "@/ui";
import styles from "./Tours.module.css";

export function ToursFirstBlock() {

  return (
    <FirstBlockLayout
        bg_image="https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg"
    >
        <div className={styles.content_wrapper}>
          <Headline
            color='white'
            type='main'
            classname={styles.text}
          >
            {"Go places you've dreamed of."}
          </Headline>
        </div>
    </FirstBlockLayout>
  );
};


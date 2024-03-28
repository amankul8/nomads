import Image from "next/image";
import styles from "./galleryBlock.module.css";

interface IGallery{
    images: string[];
}

const Gallery = ({images}:IGallery):JSX.Element=>{

    return (
        <div className={styles.gallery}>
            {
                images.map((image, index)=>{
                    return(
                        <Image
                            className={styles.image}
                            src={image}
                            width={1920}
                            height={1080}
                            loading = 'lazy'
                            alt="Gallery image"
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}


export default Gallery;



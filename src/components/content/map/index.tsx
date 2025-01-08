import { CustomButton, headlineColorTypes, headlineFontFamilyTypes, headlineTagTypes, Paragraph, SimpleHeadline } from "@/ui";
import Image from "next/image";
import { useState } from "react";
import styles from "./MapContent.module.css";
import { KyrgyzRepublic } from "./svg/kyrgyzRepublic";

interface IDestination{
    id: number,
    name: string,
    description: string
} 

const destinations:{[key: string]: IDestination} = {
    '0': {
        id: 0,
        name: 'Kyrgyz Republic',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '3':{
        id: 3,
        name: 'Batken',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '6':{
        id: 6,
        name: 'Osh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '4':{
        id: 4,
        name: 'Jalal-Abad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '7':{
        id: 7,
        name: 'Talas',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '8':{
        id: 8,
        name: 'Chui',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '5':{
        id: 5,
        name: 'Naryn',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    },
    '9':{
        id: 9,
        name: 'Isik-Kul',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi explicabo ut saepe repudiandae reiciendis eaque quae corporis et quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo blanditiis necessitatibus dolores ad quibusdam eius voluptate culpa eos non vitae optio consequatur commodi hic',
    }
}

export const MapContent = ():JSX.Element=>{

    const [destination, setDestination] = useState<IDestination>(destinations['0']);

    const mapClickHandler = (id: number):void=>{
        setDestination(destinations[`${id}`])
    }

    return(
        <section className={styles.wrapper}>
            <div className={styles.first_block}/>
            <div className={styles.content_wrapper}>
                <div className={styles.map_wrapper}>
                    <SimpleHeadline 
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h2}
                        classname={styles.map_title}
                    >
                        Kyrgyz Republic map
                    </SimpleHeadline>
                    <KyrgyzRepublic
                        clickHandler={mapClickHandler}
                        id={destination.id}
                    />
                </div>
                <div className={styles.info_wrapper}>
                    <SimpleHeadline 
                        color={headlineColorTypes.black}
                        fontFamily={headlineFontFamilyTypes.caveatBrush}
                        tag={headlineTagTypes.h2}
                    >
                        {destination.name}
                    </SimpleHeadline>

                    <Paragraph
                        classname={styles.region_description}
                    >
                        {destination.description}
                    </Paragraph>
                    <div className={styles.images}>
                        <div className={styles.image_block}>
                            <Image
                                src={'https://mcdn.wallpapersafari.com/medium/92/23/dntrkB.jpg'}
                                width={1920}
                                height={1080}
                                alt={''}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.image_block}>
                            <Image
                                src={'https://mcdn.wallpapersafari.com/medium/92/23/dntrkB.jpg'}
                                width={1920}
                                height={1080}
                                alt={''}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.image_block}>
                            <Image
                                src={'https://mcdn.wallpapersafari.com/medium/92/23/dntrkB.jpg'}
                                width={1920}
                                height={1080}
                                alt={''}
                                className={styles.image}
                            />
                        </div>
                        
                    </div>
                    <CustomButton 
                        color="blue"
                        handler={()=>{}}
                        active={true}
                    >
                        Destination in tish region
                    </CustomButton>
                </div>
            </div>
        </section>
    )
}
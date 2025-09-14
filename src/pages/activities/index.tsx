import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline } from "@/ui";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { ActivityCard } from "@/components/cards";
import { useAppSelector } from "@/store/hooks";
import { selectActivities } from "@/store/slices/activities.slice";
import { NextSeo } from "next-seo";

const Activities = () => {

    const activities = useAppSelector(selectActivities);

    return (

        <>
            <NextSeo
                title="Activities"
                description="Learn more about our team and mission."
                canonical='http://localhost:3000/activities'
                openGraph={{
                    url: 'http://localhost:3000/activities',
                    title: 'Activities',
                    description: 'Learn more about our team and mission.',
                }}
            />

            <Layout>
                <FirstBlockLayout bg_image={"/images/bg/activities_bg.jpg"}/>

                <section className={styles.section}>

                    <div className={cn('container', styles.content)}>
                        <Headline type="section" color="black">
                            Central Asia Activities
                        </Headline>
                        <div className={styles.list}>
                            {
                                activities.map((item) => {
                                    return <ActivityCard key={item.id} activity={item} />;
                                })
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </>
        
    );
}

Activities.displayName = 'Activities'
export default Activities;
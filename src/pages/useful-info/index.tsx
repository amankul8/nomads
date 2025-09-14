import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { useEffect, useRef } from "react";
import cn from "classnames";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import styles from "./useful.module.scss";
import { fetchUsefulData, UsefulDataItemSchema } from "../../store/models/useful_info";
import { SidebarItem } from "../../components/useful_sidebar_item";
import { useAppSelector } from "@/store/hooks";
import { selectStaticData } from "@/store/slices/static_data.slice";
import Loading from "@/components/loading";
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';
import { NextSeo } from "next-seo";

const UsefulDataItemSchemaExt = UsefulDataItemSchema.extend({
  key: z.string(),
});

type UsefulDataItemTypeExt = z.infer<typeof UsefulDataItemSchemaExt>;

export default function UsefulInfo() {

  const staticData: Record<string, string> = useAppSelector(selectStaticData);

  const sidebarRef = useRef<HTMLElement | null>(null);
  const [isSidebarFixed, setIsSidebarFixed] = React.useState<boolean>(false);
  const [sidebarTop, setSidebarTop] = React.useState<number>(0);
  const [id, setId] = React.useState<string>();

  const [usefulData, setUsefulData] = React.useState<UsefulDataItemTypeExt[]>([]);
  const [status, setStatus] = React.useState<'idle'|'loading'|'successed'|'failed'>('idle');

  const handleDocumentScroll = React.useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= sidebarTop && !isSidebarFixed) {
      setIsSidebarFixed(true);
    } 
    
    if (scrollTop < sidebarTop && isSidebarFixed) {
      setIsSidebarFixed(false);
    }
  }, [sidebarTop, isSidebarFixed]);

  const updateIdFromHash = () => {
    const hash = window.location.hash;
    if (hash) {
      setId(hash.substring(1));
    }
  };

  useEffect( () => {
    const fetchData = async () => {
      setStatus('loading');
      const data = await fetchUsefulData();

      if(!data) {
        setStatus('failed');
        return;
      }
      setUsefulData(data.map(item=>{return {...item, key: uuidv4()}}));
      setStatus('successed');
    };

    fetchData();
  },[])

  useEffect(() => {

    if(sidebarRef.current && sidebarTop === 0) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setSidebarTop(rect.top + window.scrollY);  // учитываем прокрутку
    }

    updateIdFromHash();

    document.addEventListener('scroll', handleDocumentScroll);
    window.addEventListener('hashchange', updateIdFromHash);

    return () => {
      document.removeEventListener('scroll', handleDocumentScroll);
      window.removeEventListener('hashchange', updateIdFromHash);
    };
  }, [sidebarTop, isSidebarFixed, handleDocumentScroll]);


  if(status == 'loading' || status == 'idle' ) return <Loading/>

  return (

    <>
      <NextSeo
        title="Useful info | Nomad"
        description="Learn more about our team and mission."
        canonical="http://localhost:3000/useful-info"
        openGraph={{
            url: "http://localhost:3000/useful-info",
            title: "Useful info | Nomad",
            description: 'Learn more about our team and mission.',
        }}
      />

      <Layout>
        <FirstBlockLayout
          bg_image="/images/bg/destinations/image10.jpg"
        >
          <div className={cn("container", styles.main_section)}>
            <div className={styles.content}>
              <Headline color="white" type="main">
                Useful Info
              </Headline>
              <Paragraph>
                {staticData['who_we_are']}
              </Paragraph>
            </div>
          </div>
        </FirstBlockLayout>

        <section className={styles.section}>
          <div className={cn("container", styles.container)}>
            <div className={styles.left_side}>
              <List
                ref={sidebarRef}
                sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={cn(styles.sidebar, {
                  [styles.sidebar_fixed]: isSidebarFixed
                })}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Summary
                  </ListSubheader>
                }
              >
                {Array.isArray(usefulData) && usefulData.length > 0
                  ? usefulData.map((item) => (
                      <SidebarItem item={item} id={id} key={item.key} />
                    ))
                  : null}
              </List>
            </div>

            <div className={styles.content}>
              {Array.isArray(usefulData) && usefulData.length > 0
                ? usefulData.map((item) => (
                    <React.Fragment key={item.key}>
                      <div id={item.id} className={styles.block}>
                        <Headline color="black" type="section">
                          {item.title}
                        </Headline>
                        <Paragraph color="black">{item.text}</Paragraph>
                        {/* <figure>
                          <Image
                            src={}
                          />
                        </figure> */}
                      </div>

                      {Array.isArray(item.list) &&
                        item.list.map((subItem, index) => (
                          <React.Fragment key={index}>
                            <div
                              id={subItem.id}
                              className={cn(styles.block, styles.sub_block)}
                              key={subItem.id}
                            >
                              <Headline color="black" type="subsection">
                                {subItem.title}
                              </Headline>
                              <Paragraph color="black">{subItem.text}</Paragraph>

                              {Array.isArray(subItem.list) && subItem.list.map((subSubItem, index) => (
                                <div
                                  id={subSubItem.id}
                                  className={cn(styles.block, styles.sub_block)}
                                  key={index}
                                >
                                  <Headline color="black" type="subsection">
                                    {subSubItem.title}
                                  </Headline>
                                  <Paragraph color="black">{subSubItem.text}</Paragraph>
                                </div>
                              ))}
                            </div>
                          </React.Fragment>
                        ))}
                    </React.Fragment>
                  ))
                : null}
            </div>
          </div>
        </section>
      </Layout>
    </>

    
  );
}

'use client';

import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { useEffect, useMemo, useRef } from "react";
import cn from "classnames";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import styles from "./useful.module.scss";
import { fetchUsefulData, UsefulDataItemType } from "../../store/models/useful_info";
import { SidebarItem } from "../../components/useful_sidebar_item";
import Image from "next/image";
import { useAppSelector } from "@/store/store";
import { selectStaticData } from "@/store/slices/static_data.slice";

export async function getStaticProps() {
  const data = await fetchUsefulData();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

type UsefulInfoType = {
  data: Array<UsefulDataItemType>;
};

export default function UsefulInfo({ data }: UsefulInfoType) {

  const staticData: Record<string, string> = useAppSelector(selectStaticData);

  const sidebarRef = useRef<HTMLElement | null>(null);
  const [isSidebarFixed, setIsSidebarFixed] = React.useState<boolean>(false);
  const [sidebarTop, setSidebarTop] = React.useState<number>(0);
  const [id, setId] = React.useState<string>();

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

  useEffect(() => {

    if(sidebarRef.current && sidebarTop == 0) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setSidebarTop(rect.top);
    }

    updateIdFromHash();

    document.addEventListener('scroll', handleDocumentScroll);
    window.addEventListener('hashchange', updateIdFromHash);

    return () => {
      document.removeEventListener('scroll', handleDocumentScroll);
      window.removeEventListener('hashchange', updateIdFromHash);
    };
  }, [sidebarTop, isSidebarFixed, handleDocumentScroll]);

  return (
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
              {data.length > 0
                ? data.map((item, index) => (
                    <SidebarItem item = {item} id={id} key={index}/>
                  ))
                : null}
            </List>
          </div>

          <div className={styles.content}>
            {data.length > 0
              ? data.map((item) => (
                  <React.Fragment key={item.id}>
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

                    {item.list &&
                      item.list.map((item) => (
                        <React.Fragment key={item.id}>
                          <div
                            id={item.id}
                            className={cn(styles.block, styles.sub_block)}
                            key={item.id}
                          >
                            <Headline color="black" type="subsection">
                              {item.title}
                            </Headline>
                            <Paragraph color="black">{item.text}</Paragraph>

                            {
                              item.list && item.list.map(item => (
                                <div
                                  id={item.id}
                                  className={cn(styles.block, styles.sub_block)}
                                  key={item.id}
                                >
                                  <Headline color="black" type="subsection">
                                    {item.title}
                                  </Headline>
                                  <Paragraph color="black">{item.text}</Paragraph>
                                </div>
                              ))
                            }
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
  );
}

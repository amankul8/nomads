import { FirstBlockLayout, Layout } from "@/layouts";
import { Headline, Paragraph } from "@/ui";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import styles from "./useful.module.scss";

export default function UsefulInfo() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    
  return (
    <Layout>

      <FirstBlockLayout
        bg_image="https://mcdn.wallpapersafari.com/medium/55/12/PZ6DvS.jpg"
      >
        <div className={cn('container', styles.main_section)}>
          <div className={styles.content}>
            <Headline color="white" type="main"> Useful Info </Headline>
          </div>
        </div>
      </FirstBlockLayout>
      
      <section className={styles.section}>
        <div className={cn('container', styles.container)}>

          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={styles.sidebar}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <div className={styles.content}>
            Content
          </div>

        </div>
      </section>

    </Layout>
  )
}


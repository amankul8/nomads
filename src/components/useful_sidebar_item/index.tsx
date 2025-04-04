import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { UsefulDataItemType } from '../../store/models/useful_info';
import { List } from '@mui/material';

type SidebarItemType = {
    item: UsefulDataItemType,
    id: string | undefined
}

export const SidebarItem = ({item, id}: SidebarItemType) => {

    return (
        <React.Fragment key={item.id}>
            <ListItemButton href={`#${item.id}`}>
            <ListItemText
                primary={item.title}
                slotProps={{
                    primary: {
                        style: { 
                            fontWeight: "bold",
                            color: id && id == item.id ?'var(--blue)': 'var(--black)'
                        },
                    },
                }}
            />
            {item.list && <ExpandMore />}
            </ListItemButton>

            {item.list && (
                <List component="div" disablePadding>
                    {item.list.map((child_item) => (
                    <ListItemButton
                        key={child_item.id}
                        sx={{ pl: 4 }}
                        href={`#${child_item.id}`}
                    >
                        <ListItemText 
                            primary={child_item.title} 
                            slotProps={{
                                primary: {
                                    style: {
                                        color: id && id == child_item.id ?'var(--blue)': 'var(--black)'
                                    },
                                },
                            }}
                        />
                    </ListItemButton>
                    ))}
                </List>
            )}
        </React.Fragment>
    )
}
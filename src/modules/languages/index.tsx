import * as React from 'react';

import cn from "classnames";
import styles from "./languages.module.scss"
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import Image from 'next/image';

type Language = {
    name: string,
    code: string
}

type Languages = Record<string, Language>;

const languages: Languages = {
    eng: {
        name: 'English',
        code: 'ENG',
    },
    fra: {
        name: 'Français',
        code: 'FRA'
    },
    trk: {
        name: 'Türkçe',
        code: 'TRK'
    },
    deu: {
        name: 'Deutsch',
        code: 'DEU'
    },
}

type LanguagesType = {
    classname?: string
}

export const Languages: React.FC<LanguagesType> = ({classname}) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const [currentLangId, setCurrentLangId] = React.useState<string>('eng');

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const handleChangeLang = (id: string, event: Event | React.SyntheticEvent) => {
        if(id !== currentLangId) setCurrentLangId(prev => id); 
        handleClose(event);
    }

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    
    return (
        <div className={cn(styles.languages, classname)}>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <div className={styles.lang_btn}>
                    <Image
                        src={`/images/flags/${currentLangId}.png`}
                        alt={languages[currentLangId].name}
                        width={25}
                        height={16}
                    />
                    {languages[currentLangId].code}
                </div>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                >
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                    >
                    <Paper sx={{background: 'none'}}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                                className={styles.lang_list}
                            >
                                {
                                    Object.entries(languages).map(([key, value]) => {
                                        return (
                                            <MenuItem 
                                                sx={{
                                                    display: 'flex', 
                                                    flexDirection: 'row', 
                                                    gap: 1,
                                                    alignItems: 'center',
                                                    fontSize: 12,
                                                    color: 'var(--blue)'
                                                }}
                                                onClick={ (e) => handleChangeLang(key, e) } 
                                                key={key}
                                            > 
                                                <Image
                                                    src={`/images/flags/${key}.png`}
                                                    alt={value.name}
                                                    width={25}
                                                    height={16}
                                                />
                                                {value.code}
                                            </MenuItem >
                                        )
                                    })
                                }
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
            </Popper>

        </div>
    )
}
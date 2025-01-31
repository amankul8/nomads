import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Container } from "@mui/material";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./accommodation.module.scss";
import { red } from "@mui/material/colors";
import { Headline, Paragraph } from "@/ui";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface IAccommodationCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const AccommodationCard:React.FC<IAccommodationCard> = () => {
    return (
        <Card sx={{ 
                maxWidth: 380, 
                minWidth: 300, 
                width: '100%',
                position: "relative"
            }}>
            <CardMedia
                component="img"
                height="300"
                image="/images/auth_backgr_image.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: "5fr 1fr",
                        gridTemplateRows: "1fr", 
                        marginBottom: '16px'
                    }}
                >
                    <Headline color="black" type="subsection">
                        Card title dsfsd sdfv sd
                    </Headline>
                    <Headline color="blue" type="subsection" classname={styles.price}> USD 500 </Headline>
                </Box>
                <Paragraph classname={styles.description}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Paragraph>
            </CardContent>
            <CardActions 
                disableSpacing
                sx={{color: 'var(--blue)'}}
            >
                <FavoriteIcon />
                <ShareIcon />
            </CardActions>
        </Card>
    )
}
import { useAppSelector } from "@/store/hooks";
import { selectPupularActivities } from "@/store/slices/activities.slice";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"

type Props = {

}

export function ActivitiesList({ }: Props) {

    const activities = useAppSelector(selectPupularActivities);

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap'
            }}
        >

            {
                activities.map((item, index) => {
                    return (
                        <Link href={`/activities/${index + 1}`} key={index}>
                            <Card sx={{ maxWidth: 568, minWidth: 280, width: 'max-content' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="280"
                                        image={item.images[0].url}
                                        alt={item.images[0].alt}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    )
                })
            }
        </Box >
    )
}
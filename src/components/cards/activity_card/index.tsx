import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from './styles.module.scss';

import { ActivityType } from '@/store/models/activities';
import Link from 'next/link';

type ActivityCard = {
    activity: ActivityType
}

export function ActivityCard({activity}: ActivityCard) {

  return (
    <Link href={`/activities/${activity.id}`}>
        <Card className={styles.card}>
            <CardHeader
                title={activity.title.length > 50? activity.title.slice(0, 46) + '...': activity.title }
                subheader="Central asia"
            />
        <CardMedia
            component="img"
            height="194"
            image={activity.images[0].url}
            alt={activity.images[0].alt}
        />
        <CardContent>
            <Typography 
                variant="body2" 
                sx={{
                    color: 'text.secondary',
                    display: '-webkit-box',
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
            {activity.description}
            </Typography>
        </CardContent>
        </Card>
    </Link>
  );
}
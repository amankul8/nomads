import React, { useEffect } from "react";
import styels from "./styles.module.scss";
import TourBookingForm from "@/modules/tour_booking";
import { useRouter } from 'next/router';
import { useAppDispath } from "@/store/store";
import { updateTourBookingData } from "@/store/slices/tour_order.slice";

export default function TourBookingPage() {

    const router = useRouter();
    const dispatch = useAppDispath();

    useEffect(() => {
        
        const { tourId } = router.query;

        if (typeof tourId === 'string') {
            const parsedId = parseInt(tourId, 10);
            if (!isNaN(parsedId)) {
                dispatch(updateTourBookingData({
                    field: 'tour_id',
                    value: parsedId,
                }));
            }
        }
    }, [router.query.tourId]);

    return (
        <main className={styels.section}>
            <TourBookingForm/>
        </main>
    )
}
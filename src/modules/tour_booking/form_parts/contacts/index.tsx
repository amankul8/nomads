import React from "react";
import cn from "classnames";
import styles from '../general.module.scss';
import { AnimatePresence, motion } from "motion/react"
import { Headline } from "@/ui";
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Civility } from "@/store/models/tour_order";
import { useAppSelector } from "@/store/store";
import { selectTourBookingData } from "@/store/slices/tour_order.slice";
import { TourBookingFormTitle } from "../components/title";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ManIcon from '@mui/icons-material/Man';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ContactsIcon from '@mui/icons-material/Contacts';
import { TourBookingFormUsersCard } from "../components/user_card_wrap";

export default function ContactsForm() {

    const bookingData = useAppSelector(selectTourBookingData);

    return (
        <motion.div 
            key="Contact Details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.wrapper}
        >
            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<ManageAccountsIcon/>}
                    title="Your Details"
                />

                <div className={styles.line}>

                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                        <InputLabel id="demo-select-small-label"> Civility </InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Civility"
                            value={bookingData.bookingUser.civility}
                            // onChange={handleChange}
                        >
                            <MenuItem selected value={Civility.Mr}>Mr</MenuItem>
                            <MenuItem value={Civility.Mrs}>Mrs</MenuItem>
                            <MenuItem value={Civility.Miss}>Miss</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="first"
                        label="First name"
                        type="text"
                        size="small"
                        sx={{ width: 220 }}
                        value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                    <TextField
                        id="second"
                        label="Last  name"
                        type="text"
                        size="small"
                        sx={{ width: 220 }}
                        value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                </div>
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<ContactsIcon/>}
                    title="Address"
                />

                <div className={styles.line}>

                    <TextField
                        id="city"
                        label="City"
                        type="text"
                        size="small"
                        sx={{ width: 220 }}
                        // value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                    <TextField
                        id="addres"
                        label="Addres"
                        type="text"
                        size="small"
                        sx={{ width: 220 }}
                        // value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                </div>
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<ContactEmergencyIcon/>}
                    title="Contact"
                />

                <div className={styles.line}>

                    <TextField
                        id="gmail"
                        label="Gmail"
                        type="text"
                        size="small"
                        sx={{ width: 300 }}
                        // value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                    <TextField
                        id="phone"
                        label="Mobile phone (WhatsApp)"
                        type="text"
                        size="small"
                        sx={{ width: 220 }}
                        // value={2}
                        // onChange={handleChange('children')}
                        error={false}
                    />
                </div>
            </div>


            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<ManIcon/>}
                    title="Adult"
                />

                {
                    Array.from({ length: 3 }, (_, index) => {
                        return (
                        <TourBookingFormUsersCard>
                            <div className={styles.line}>
                                <FormControl sx={{ m: 1, minWidth: 100}} size="small">
                                    <InputLabel id="demo-select-small-label"> Civility </InputLabel>
                                    <Select
                                        labelId="user_civility"
                                        id="demo-select-small"
                                        label="Civility"
                                        value={bookingData.adults[1]?.civility}
                                        // onChange={handleChange}
                                    >
                                        <MenuItem selected value={Civility.Mr}>Mr</MenuItem>
                                        <MenuItem value={Civility.Mrs}>Mrs</MenuItem>
                                        <MenuItem value={Civility.Miss}>Miss</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    id="first"
                                    label="First name"
                                    type="text"
                                    size="small"
                                    sx={{ width: 220 }}
                                    value={2}
                                    // onChange={handleChange('children')}
                                    error={false}
                                />
                                <TextField
                                    id="second"
                                    label="Last  name"
                                    type="text"
                                    size="small"
                                    sx={{ width: 220 }}
                                    value={2}
                                    // onChange={handleChange('children')}
                                    error={false}
                                />
                            </div>
                            <div className={styles.line}>
                                <TextField
                                    id="birth-date"
                                    label="Birth of date"
                                    type="date"
                                    size="small"
                                    sx={{ width: 200 }}
                                    // onChange={handleChange('startDate')}
                                    // error={Boolean(errors.startDate)}
                                    // helperText={errors.startDate}
                                    slotProps={{
                                        inputLabel: { shrink: true }
                                    }}
                                />
                                <Autocomplete
                                    disablePortal
                                    options={[{label: 'ssdfvdf'}]}
                                    sx={{ width: 200 }}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} label="Country" />}
                                />
                                
                            </div>
                        </TourBookingFormUsersCard>
                        )
                    })
                }
            </div>

            <div className={styles.block}>
                <TourBookingFormTitle
                    icon={<EscalatorWarningIcon/>}
                    title="Children"
                />
                {
                    Array.from({ length: 3 }, (_, index) => {
                        return (
                        <TourBookingFormUsersCard>
                            <div className={styles.line}>
                                <FormControl sx={{ m: 1, minWidth: 100}} size="small">
                                    <InputLabel id="demo-select-small-label"> Civility </InputLabel>
                                    <Select
                                        labelId="user_civility"
                                        id="demo-select-small"
                                        label="Civility"
                                        value={bookingData.adults[1]?.civility}
                                        // onChange={handleChange}
                                    >
                                        <MenuItem selected value={Civility.Mr}>Mr</MenuItem>
                                        <MenuItem value={Civility.Mrs}>Mrs</MenuItem>
                                        <MenuItem value={Civility.Miss}>Miss</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    id="first"
                                    label="First name"
                                    type="text"
                                    size="small"
                                    sx={{ width: 220 }}
                                    value={2}
                                    // onChange={handleChange('children')}
                                    error={false}
                                />
                                <TextField
                                    id="second"
                                    label="Last  name"
                                    type="text"
                                    size="small"
                                    sx={{ width: 220 }}
                                    value={2}
                                    // onChange={handleChange('children')}
                                    error={false}
                                />
                            </div>
                            <div className={styles.line}>
                                <TextField
                                    id="birth-date"
                                    label="Birth of date"
                                    type="date"
                                    size="small"
                                    sx={{ width: 200 }}
                                    // onChange={handleChange('startDate')}
                                    // error={Boolean(errors.startDate)}
                                    // helperText={errors.startDate}
                                    slotProps={{
                                        inputLabel: { shrink: true }
                                    }}
                                />
                                <Autocomplete
                                    disablePortal
                                    options={[{label: 'ssdfvdf'}]}
                                    sx={{ width: 200 }}
                                    size="small"
                                    renderInput={(params) => <TextField {...params} label="Country" />}
                                />
                                
                            </div>
                        </TourBookingFormUsersCard>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}
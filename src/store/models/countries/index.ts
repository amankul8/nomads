import z from 'zod';
import client from "@/api/rest_countries_api";
import { fetchCountriesFailedStatus, fetchCountriesLoadingStatus, fetchCountriesSuccessedStatus, selectCountriesIdleStatus } from '@/store/slices/countries.slice';
import { AppThunk } from '@/store/store';

const FlagSchema = z.object({
    png: z.string().url(),  
    svg: z.string().url(),  
    alt: z.string(),  
  });
  
  const NameSchema = z.object({
    common: z.string(),  
    official: z.string(),  
    nativeName: z.object({
      eng: z.object({
        official: z.string(),
        common: z.string(),
      }).optional(),
      tsn: z.object({
        official: z.string(),
        common: z.string(),
      }).optional(),
    }),
  });
  
  const IddSchema = z.object({
    root: z.string(),  
    suffixes: z.array(z.string()),  
  });
  
  const CountrySchema = z.object({
    flags: FlagSchema,
    name: NameSchema,
    cca2: z.string().length(2),  
    ccn3: z.string().optional(),  
    cca3: z.string().length(3),  
    idd: IddSchema,
    timezones: z.array(z.string()),  
  });

export type CountryType = z.infer<typeof CountrySchema>;

export const fetchCountries = (): AppThunk => async (dispatch, getState, { api }) => {

     const isIdle = selectCountriesIdleStatus(getState());
        if (!isIdle) {
            return;
        }
    
        dispatch(fetchCountriesLoadingStatus());
    
        try {
            const response =  await client.api('all?fields=name,cca2,ccn3,cca3,languagesm, latlng,timezones,flags,idd');
    
            const data = response.data;
    
            const result = CountrySchema.array().safeParse(data);
    
            if (!result.success) {
                dispatch(fetchCountriesFailedStatus('Data validation error!'));
                console.log(result.error);
                return;
            }
    
            dispatch(fetchCountriesSuccessedStatus(result.data));
    
        } catch (error: any) {
            const errorMessage = error?.message || 'Failed to fetch destinations';
            dispatch(fetchCountriesFailedStatus(errorMessage));
        }

} 
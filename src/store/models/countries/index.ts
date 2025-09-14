import z from 'zod';
import { fetchCountriesFailedStatus, fetchCountriesLoadingStatus, fetchCountriesSuccessedStatus, selectCountriesIdleStatus } from '@/store/slices/countries.slice';
import { AppThunk } from '@/store/type';
  
  const CountrySchema = z.object({
    id: z.number(),
    name: z.string(),
    cca3: z.string(),
    description: z.string()
  });

export type CountryType = z.infer<typeof CountrySchema>;

export const fetchCountries = (): AppThunk => async (dispatch, getState, { apiClient }) => {

     const isIdle = selectCountriesIdleStatus(getState());
        if (!isIdle) {
            return;
        }
    
        dispatch(fetchCountriesLoadingStatus());
    
        try {
            const response =  await apiClient.getClient().get('data/locations/countries.json');
    
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
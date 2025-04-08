import {z} from 'zod';


const ListSchema = z.object({
    title: z.string().optional(),
    data: z.array(z.string()).optional(),
  });
  
const WhoWeAreDataSchema = z.object({
    subtitle: z.string().optional(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    list: ListSchema,
});

export type WhoWeAreDataType = z.infer<typeof WhoWeAreDataSchema>;

export const fetchWhoWeAreData = async () => {
  
    try {
        const res = await fetch('http://localhost:3000/data/who_we_are.json');
        const data = await res.json();
    
        const result = WhoWeAreDataSchema.array().safeParse(data);

        if(!result.success)
            return [];

        return result.data;
    }
    catch(err) {
        return [];
    }
}
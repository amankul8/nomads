import {z} from 'zod';

const UsefulDataItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    isParent: z.boolean(),
    childs: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
    }))
});

export type UsefulDataItemType = z.infer<typeof UsefulDataItemSchema>;

export const fetchUsefulData = async () => {
  
    try {
        const res = await fetch('http://localhost:3000/data/useful.json');
        const data = await res.json();
    
        const result = UsefulDataItemSchema.array().safeParse(data);

        if(!result.success)
            return [];

        return result.data;
    }
    catch(err) {
        return [];
    }
}
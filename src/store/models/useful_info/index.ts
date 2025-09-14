import {z} from 'zod';
import fs from 'fs/promises';
import path from 'path';

export const UsefulDataItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    text: z.string(),
    image: z.union([z.string(), z.undefined()]),
    list: z.union([
        z.array(z.object({
            id: z.string(),
            title: z.string(),
            text: z.string(),
            image: z.union([z.string(), z.undefined()]),
            list: z.union([
                z.array(z.object({
                    id: z.string(),
                    title: z.string(),
                    text: z.string(),
                    image: z.union([z.string(), z.undefined()]),
                })), 
                z.undefined()
            ])
        })), 
        z.undefined()
    ])
});

export type UsefulDataItemType = z.infer<typeof UsefulDataItemSchema>;

export const fetchUsefulData = async () => {
  
    // try {
    //     const res = await fetch('http://localhost:3000/data/useful.json');
    //     const data = await res.json();
    
    //     const result = UsefulDataItemSchema.array().safeParse(data);

    //     if(!result.success)
    //         return [];

    //     return result.data;
    // }
    // catch(err) {
    //     return [];
    // }

try {
    const res = await fetch('http://localhost:3000/data/useful.json');
    const data = await res.json();

    const result = UsefulDataItemSchema.array().safeParse(data);

    if (!result.success) return [];

    return result.data;
} catch (error) {
    console.error("Error reading useful.json:", error);
    return [];
}
}
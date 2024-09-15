import { z, defineCollection } from 'astro:content'

const meta = defineCollection({
    type: 'data',
    schema: z.object({
        "pathname": z.string(),
        "lang-picker": z.object({
            name: z.string(),
            link: z.string()
        }),
        "nav": z.array(z.object({
            name: z.string(),
            link: z.string()
        }))
    })
})

export const collections = {
    'meta': meta,
}
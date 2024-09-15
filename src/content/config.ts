import { z, defineCollection } from 'astro:content'

const meta = defineCollection({
    type: 'data',
    schema: z.object({
        "lang-picker": z.object({
            name: z.string(),
            link: z.string()
        })
    })
})

export const collections = {
    'meta': meta,
}
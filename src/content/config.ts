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
        })),
        "btns": z.object({
            "readmore": z.string()
        })
    })
})

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        excerpt: z.string()
    })
})

export const collections = {
    'meta': meta,
    'posts': posts
}
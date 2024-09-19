import { z, defineCollection } from 'astro:content'

const meta = defineCollection({
    type: 'data',
    schema: z.object({
        "dir": z.string(),
        "pages-meta": z.object({
            'home': z.object({
                'title': z.string(),
                'description': z.string(),
                'og-title': z.string(),
                'og-description': z.string(),
                'og-image': z.string(),
                'og-url': z.string(),
                'og-type': z.string()
            })
        }),
        "lang-picker": z.object({
            name: z.string(),
            link: z.string()
        }),
        "nav": z.array(z.object({
            name: z.string(),
            link: z.string(),
            "current-page-regex": z.string()
        })),
        "btns": z.object({
            "readmore": z.string(),
            "next": z.string(),
            "prev": z.string()
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

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
})

export const collections = {
    'meta': meta,
    'posts': posts,
    'pages': pages
}
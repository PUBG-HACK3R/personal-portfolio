import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adnan Khan - Full Stack Developer Portfolio',
    short_name: 'Adnan Khan',
    description: 'Personal portfolio showcasing projects and skills of Full Stack Developer Adnan Khan',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['portfolio', 'developer', 'web development'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}

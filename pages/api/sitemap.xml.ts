import { getProperties } from '@/app/services';
import type { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://rfrola.com.ar';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const staticRoutes = ['', '/contacto', '/propiedades', '/quiensoy'];
  const properties = await getProperties();
  const propertyRoutes = properties.map((property) => `/${property.id}`);
  const urls = [...staticRoutes, ...propertyRoutes];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (route) => `
          <url>
            <loc>${BASE_URL}${route}</loc>
          </url>
        `
        )
        .join('')}
    </urlset>
  `;
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}

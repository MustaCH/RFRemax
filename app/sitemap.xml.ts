import { getProperties } from "./services";
import { NextRequest } from "next/server";

const BASE_URL = "https://rfrola.com.ar";

export async function GET(req: NextRequest) {
  const staticRoutes = ["", "/contacto", "/propiedades", "/quiensoy"];

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
        .join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

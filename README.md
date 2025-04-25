# RFRemax - Romina Frola | Agente Inmobiliario

Sitio web profesional para la agente inmobiliaria Romina Frola, desarrollado en Next.js y optimizado para SEO, performance y accesibilidad.

## 🏡 Descripción General

Este proyecto es una plataforma inmobiliaria moderna que permite a Romina Frola mostrar propiedades, recibir consultas y brindar información relevante a potenciales clientes. El sitio está optimizado para buscadores y dispositivos móviles, siguiendo las mejores prácticas de desarrollo web.

## ✨ Características principales

- Listado dinámico de propiedades con detalle individual.
- SEO avanzado: sitemap dinámico, robots.txt, metadatos enriquecidos y marcado estructurado.
- Accesibilidad mejorada (a11y) y excelente puntuación en Lighthouse.
- Formulario de contacto y enlaces directos a redes sociales.
- Diseño responsive y moderno.
- Integración con servicios externos (Google Analytics, Tag Manager, etc).

## 🛠️ Tecnologías y dependencias

- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- Tailwind CSS
- Google Fonts / next/font
- Cloudinary (imágenes)
- Otros: RE/MAX branding, iconos, etc.

## 🚀 Instalación y uso local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MustaCH/RFRemax.git
   cd RFRemax
   ```
2. Instala dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 SEO y Accesibilidad

- **Sitemap:** `/api/sitemap.xml` generado dinámicamente con todas las propiedades y páginas relevantes.
- **robots.txt:** Permite indexación y referencia al sitemap.
- **Marcado estructurado:** JSON-LD para propiedades y organización.
- **Meta tags:** Descripciones, Open Graph, Twitter Cards y verificación de Google.
- **Accesibilidad:** Uso de etiquetas semánticas, roles ARIA y buenas prácticas a11y.
- **Puntuación Lighthouse:** 100/100 en SEO y accesibilidad.

## 🗂️ Estructura del proyecto

```
/app
  /[id]           # Página de propiedades individuales
  /components     # Componentes reutilizables (banners, cards, formularios)
  /containers     # Contenedores de secciones principales
  /services       # Lógica de acceso a datos/API
  /layout.tsx     # Layout global y metadatos
  /page.tsx       # Página principal (home)
  /page.metadata.ts # Metadatos de la home
/pages/api
  sitemap.xml.ts  # Endpoint dinámico para sitemap
/public
  robots.txt
  googleXX.html   # Verificación de Google Search Console
```

## ☁️ Despliegue

- El proyecto puede desplegarse fácilmente en Vercel, Netlify o cualquier hosting compatible con Next.js.
- Configura las variables de entorno necesarias para producción.
- El archivo `next.config.mjs` incluye headers de seguridad (CSP).

## 🤝 Contribuciones

¡Contribuciones y sugerencias son bienvenidas!  
Abre un issue o un pull request para proponer mejoras, reportar bugs o sugerir nuevas funcionalidades.

## 📬 Contacto

- **Romina Frola**  
  [Sitio web](https://rfrola.com.ar)  
  [Instagram](https://www.instagram.com/rominafrola.remax/)  
  [Facebook](https://www.facebook.com/rominafrola.remax/)

---

# ☕ Coffee Shop - Tienda de Café Online

Una aplicación web moderna construida con Next.js para una tienda de café, que incluye catálogo de productos, historia de la empresa, proceso de producción y sistema de contacto.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🛍️ Catálogo de productos con imágenes
- 📖 Sección de historia de la empresa
- 🌱 Visualización del proceso del café
- 📱 Formulario de contacto
- 🛒 Sistema de carrito de compras (próximamente)

## 🛠️ Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide Icons](https://lucide.dev/) - Iconos modernos

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 18.17 o superior)
- npm (normalmente viene con Node.js)
- Git

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd coffee-shop
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las imágenes:
   - Crea la carpeta de imágenes:
     ```bash
     mkdir -p public/images/products
     ```
   - Coloca tus imágenes en las siguientes ubicaciones:
     ```
     public/images/hero-coffee.jpg      (1920x1080px)
     public/images/coffee-history.jpg   (800x500px)
     public/images/products/arabica-premium.jpg    (400x300px)
     public/images/products/colombian-ground.jpg   (400x300px)
     public/images/products/italian-espresso.jpg   (400x300px)
     public/images/products/instant-premium.jpg    (400x300px)
     ```

## 🚀 Ejecutando el proyecto

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
coffee-shop/
├── public/
│   └── images/
│       ├── products/
│       ├── hero-coffee.jpg
│       └── coffee-history.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── History.tsx
│   │   ├── Process.tsx
│   │   ├── ProductList.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── products.ts
│       └── images.ts
└── package.json
```

## 🎨 Personalización

1. Colores: Los colores principales se pueden modificar en los archivos de componentes (busca los valores hexadecimales como #4A3428)
2. Imágenes: Reemplaza las imágenes en la carpeta `public/images/` manteniendo los mismos nombres
3. Contenido: Edita el texto en los componentes correspondientes en `src/components/`
4. Productos: Modifica el catálogo de productos en `src/data/products.ts`

## 📝 Tareas Pendientes

- [ ] Implementar carrito de compras
- [ ] Agregar sistema de pagos
- [ ] Implementar autenticación de usuarios
- [ ] Agregar panel de administración
- [ ] Implementar sistema de reseñas de productos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto


Link del proyecto: [https://github.com/yken-neky/coffee-shop](https://github.com/yken-neky/coffee-shop)

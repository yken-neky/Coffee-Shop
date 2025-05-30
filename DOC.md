# 📚 Documentación Coffee Shop

## 📋 Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Dependencias](#dependencias)
3. [Componentes](#componentes)
4. [Estilos](#estilos)
5. [Utilidades](#utilidades)
6. [Configuración](#configuración)

## 🗂️ Estructura del Proyecto
```
coffee-shop/
├── public/               # Archivos estáticos
│   └── images/          # Imágenes del sitio
│       ├── products/    # Imágenes de productos
│       ├── hero-coffee.jpg
│       └── coffee-history.jpg
├── src/
│   ├── app/            # Directorio principal de Next.js
│   ├── components/     # Componentes React
│   └── data/          # Datos y configuraciones
└── package.json        # Dependencias y scripts
```

## 📦 Dependencias

### Dependencias Principales
- **next**: ^14.0.0 - Framework de React
- **react**: ^18.0.0 - Biblioteca principal
- **react-dom**: ^18.0.0 - Renderizado para web
- **typescript**: ^5.0.0 - Superset tipado de JavaScript
- **tailwindcss**: ^3.0.0 - Framework CSS utilitario
- **lucide-react**: ^0.294.0 - Iconos modernos
- **sonner**: ^1.0.0 - Sistema de notificaciones toast

### DevDependencies
- **@types/react**: ^18.0.0
- **@types/node**: ^20.0.0
- **eslint**: ^8.0.0
- **postcss**: ^8.0.0

## 🧩 Componentes

### 📱 Navbar (`src/components/Navbar.tsx`)
```typescript
Características:
- Navegación principal fija
- Cambio de color al hacer scroll
- Enlaces a todas las secciones
- Animaciones de hover
- Icono de carrito de compras

Props: No recibe props

Estado:
- isScrolled: boolean (controla la transparencia)
```

### 🏆 Hero (`src/components/Hero.tsx`)
```typescript
Características:
- Imagen de fondo a pantalla completa
- Texto principal y CTA
- Overlay con gradiente
- Botón de acción

Props: No recibe props
```

### 📖 History (`src/components/History.tsx`)
```typescript
Características:
- Diseño en dos columnas
- Imagen destacada
- Texto histórico
- Fondo beige claro

Props: No recibe props
```

### ⚙️ Process (`src/components/Process.tsx`)
```typescript
Características:
- Grid de 4 columnas en desktop
- Iconos animados
- Fondo oscuro con elementos claros
- Hover effects en las tarjetas

Props: No recibe props

Constantes:
processes: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}>
```

### 🛍️ ProductList (`src/components/ProductList.tsx`)
```typescript
Características:
- Grid responsive de productos
- Tarjetas con hover effect
- Imágenes optimizadas
- Notificaciones toast al agregar al carrito

Props: No recibe props

Métodos:
- handleAddToCart(): void
```

### 📞 Contact (`src/components/Contact.tsx`)
```typescript
Características:
- Formulario de contacto
- Información de la empresa
- Validación de campos
- Diseño en dos columnas

Props: No recibe props
```

### 👣 Footer (`src/components/Footer.tsx`)
```typescript
Características:
- Enlaces de navegación
- Redes sociales
- Información legal
- Diseño responsive en grid

Props: No recibe props
```

## 🎨 Estilos

### Colores Principales
```css
- Principal: #4A3428 (Marrón café)
- Secundario: #6B4D3B (Marrón más claro)
- Fondo: #FAF5F0 (Beige claro)
- Blanco: #FFFFFF
- Negro: #171717
```

### Clases Utilitarias
```css
.transition-smooth {
  transition-all duration-300 ease-in-out
}

.fade-in-up {
  Animación de entrada para elementos
}
```

### Breakpoints
```css
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

## 🛠️ Utilidades

### Sistema de Imágenes (`src/data/images.ts`)
```typescript
Estructura:
- hero: string
- history: string
- products: {
  [key: string]: string
}

Tamaños recomendados:
- Hero: 1920x1080px
- Historia: 800x500px
- Productos: 400x300px
```

### Datos de Productos (`src/data/products.ts`)
```typescript
Interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'grain' | 'ground' | 'instant';
}
```

## ⚙️ Configuración

### Next.js (`next.config.ts`)
```typescript
Características:
- Optimización de imágenes
- Soporte para SVG
- Configuración de seguridad para imágenes externas
```

### Tailwind (`tailwind.config.js`)
```typescript
Extensiones:
- Colores personalizados
- Fuentes
- Plugins
```

### TypeScript (`tsconfig.json`)
```typescript
Configuraciones importantes:
- Alias de importación (@/)
- Strict mode
- ES6+ features
```

## 🔄 Animaciones y Transiciones

### Scroll Suave
```typescript
Implementado a través de:
- CSS scroll-behavior: smooth
- scroll-margin-top en secciones
```

### Efectos de Hover
```typescript
Componentes:
- Navbar: scale-105 en enlaces
- Productos: translate-y-1 y shadow
- Proceso: bg-opacity cambios
```

### Notificaciones
```typescript
Sistema: Sonner
Posición: bottom-right
Duración: 3000ms
```

## 🔒 Seguridad

### Imágenes
- Validación de tipos
- Optimización automática
- Carga lazy por defecto

### Formularios
- Validación de inputs
- Sanitización de datos
- Protección CSRF

## 📱 Responsive Design

### Estrategia Mobile-First
```css
- Diseño base para móvil
- Breakpoints progresivos
- Menú adaptativo
- Imágenes responsive
```

## 🚀 Performance

### Optimizaciones
- Carga lazy de imágenes
- Componentes del lado del cliente marcados
- Transiciones optimizadas
- Caché de fuentes

## 🔜 Futuras Mejoras
1. Sistema de carrito persistente
2. Autenticación de usuarios
3. Panel de administración
4. Sistema de pagos
5. Gestión de inventario 
# Guía de labs — IBM Bob Level 3

Sitio estático listo para publicar en **GitHub Pages**. No hay que compilar nada: es `index.html` + la carpeta `images/`, todo con rutas relativas.

## Publicarlo (repo público + Pages)

1. Crea un repositorio **público** en tu cuenta, por ejemplo `bob-l3-guia`.
2. Sube **el contenido de esta carpeta** (`index.html` y la carpeta `images/`) a la raíz del repo:
   - **Por web:** en el repo → *Add file → Upload files* → arrastra `index.html` y la carpeta `images/`.
   - **Por git** (recomendado, sin límites de subida):
     ```bash
     git init
     git add .
     git commit -m "Guía de labs IBM Bob L3"
     git branch -M main
     git remote add origin https://github.com/miguelhgo/bob-l3-guia.git
     git push -u origin main
     ```
3. En el repo: **Settings → Pages → Source: _Deploy from a branch_ → Branch `main` / carpeta `/ (root)` → Save**.
4. En ~1 minuto estará en **https://miguelhgo.github.io/bob-l3-guia/**

## Notas
- Funciona igual en local (abre `index.html`) que en Pages.
- Si cambias el nombre del repo, la URL cambia igual (`…github.io/EL-NOMBRE/`).
- Peso ~12 MB; las capturas cargan bajo demanda (*lazy*), así que la portada abre ligera.
- Antes de hacerlo público, repasa que ninguna captura deje ver un token o datos sensibles.

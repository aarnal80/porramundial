# Porra Real Madrid - Mundial 2026

Web estatica para GitHub Pages creada para votar resultados de partidos del Mundial:

- gana el equipo local
- empate
- gana el equipo visitante

La web guarda los votos en el navegador con `localStorage`. Para juntar votos de varios companeros, cada uno puede usar **Exportar** y despues se pueden cargar los archivos con **Importar** en un navegador principal.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos archivos a la raiz del repositorio:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. En GitHub, entra en **Settings > Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/root`.
6. Guarda. GitHub te dara una URL publica de la porra.

## Editar partidos o probabilidades

Los partidos estan en el array `matches` de `app.js`. Puedes cambiar nombres, fechas, sedes, rankings, textos y probabilidades orientativas.

Las probabilidades incluidas son una referencia visual editable, no cuotas en tiempo real de casas de apuestas.

# TESÉLIA TRACK — Pokémon Negro (Nintendo DS)

Web-app (PWA) de la Pokédex original de Teselia. Incluye **156 entradas** (#000–#155), primer momento en el recorrido para conseguir cada familia, requisitos de evolución, versiones exclusivas, eventos y regresos con Surf.

## Usar en el iPhone como una app

1. Descomprime el ZIP en tu ordenador.
2. En GitHub crea un repositorio público, por ejemplo `teselia-track`.
3. Sube al directorio principal los archivos `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png` e `icon-512.png`. No hace falta subir `src` ni los scripts Python.
4. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
5. Abre `https://TU_USUARIO.github.io/teselia-track/` en **Safari** del iPhone.
6. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir**.

La web-app funciona sin conexión después de abrirse por primera vez con Internet. Las imágenes individuales se almacenan conforme se visitan; si no hay conexión, la tarjeta muestra igualmente el número.

## Archivo HTML independiente

También se incluye `teselia-track.html`, que puedes abrir en un navegador como demostración local. Para que iOS la instale y el modo offline funcione de forma fiable, se debe publicar en HTTPS.

## Uso

- **Recorrido**: nuevas familias según las rutas de la historia. Las evoluciones aparecen con la familia de origen, pero no necesariamente son capturables en esa primera visita.
- **Pokédex**: las 156 entradas ordenadas por número regional.
- **Mi colección**: resumen, exportación e importación de progreso.
- Las casillas de capturado se guardan en el almacenamiento local del navegador. Haz una copia de seguridad periódicamente (JSON).
- Cuatro singulares de evento (Victini, Keldeo, Meloetta y Genesect) no son obligatorios para recibir la consideración de Pokédex regional completa dentro del juego, pero sí aparecen en esta guía de 156 entradas.

## Fuentes de contraste

- https://www.serebii.net/blackwhite/unovadex.shtml
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_Black_and_White
- https://www.wikidex.net/wiki/Pok%C3%A9dex_de_Teselia
- https://pokemondb.net/evolution

Guía independiente, no oficial. Los nombres de Pokémon y sus marcas pertenecen a sus titulares.

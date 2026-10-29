# PokéAtlas — 9 aventuras Pokémon

Web adaptable para iPhone, Android y PC. Incluye un menú visual animado para elegir entre:

1. Pokémon Rojo Fuego
2. Pokémon HeartGold
3. Pokémon Esmeralda Recharged (hackrom de Jaizu; se usa Esmeralda original como referencia)
4. Pokémon Platino
5. Pokémon Negro
6. Pokémon Negro 2
7. Pokémon Y
8. Pokémon Luna
9. Pokémon Ultraluna

## Funcionalidades

- Juegos diferenciados con sus propios avances, colores y rutas en orden narrativo.
- Pokédex regional con filtros de pendientes y conseguidos.
- Botón **ⓘ** y ficha detallada al pulsar cada Pokémon. Se muestran zonas de encuentro para la **versión concreta** del juego, nivel, método (hierba, Surf, cañas, etc.) y requisitos (hora/estación, cuando están registrados).
- Evoluciones y condiciones consultadas en PokéAPI al abrir una ficha.
- Avisos específicos para Pokémon de regalo, legendarios, intercambios y eventos.
- Notas personales por Pokémon (especialmente útiles para el hackrom Recharged).
- Guardado de capturas y notas por juego en `localStorage`. Importación automática de la partida anterior de Pokémon Negro si ya estaba en el mismo almacenamiento de Teselia Track.
- Exportación/importación del progreso como JSON desde **Colección** (incluye las notas personales).
- Instalación en pantalla de inicio de iPhone como web app; caché para el funcionamiento sin conexión una vez cargada.

## Publicar actualizando tu GitHub Pages

El repositorio que ya tienes se puede seguir usando: `https://github.com/paupa23/teselia-track`.

1. **Antes de actualizar, exporta tu progreso** de la versión antigua en el iPhone (Mi colección > Exportar copia). Conserva esa copia en Archivos o iCloud.
2. Descomprime el ZIP.
3. Coloca el contenido de la carpeta `pokeatlas-web` **en la raíz del repositorio**, no dentro de otra subcarpeta. Los archivos `index.html`, `app.js`, `style.css`, `sw.js`, `manifest.webmanifest`, `names.js`, `guides.js`, `game-data.js`, `icon-*.png` y la carpeta `data/` deben quedar juntos.
4. Mantén GitHub Pages configurado como `main` / `/(root)`.
5. Abre `https://paupa23.github.io/teselia-track/` en Safari. Desde Compartir > Añadir a pantalla de inicio puedes volver a instalarla o actualizar el acceso directo.

**Con Git** (opcional):

```bash
git clone https://github.com/paupa23/teselia-track.git
cd teselia-track
# Copia aquí todos los archivos del ZIP, en la raíz
git add -A
git commit -m "PokeAtlas: nueve juegos y fichas detalladas"
git push
```

### Guardado y compatibilidad

Si usas **el mismo enlace en el mismo navegador/perfil**, la nueva aplicación intenta importar automáticamente las marcas guardadas por la antigua Teselia Track. Aunque normalmente se conservan, **haz una exportación previa**. Safari y las apps de pantalla de inicio pueden usar almacenamientos independientes según la versión de iOS.

Los progresos se guardan localmente; **no se sincronizan automáticamente** entre iPhone y ordenador. La exportación manual es la forma recomendada de hacer copias.

## Sobre la exactitud de los encuentros

- Para **Pokémon Negro**, la guía inicial de las 156 especies está disponible sin consultas externas.
- Para **Rojo Fuego**, la Pokédex de Kanto de 151 especies está disponible de inicio.
- En los demás juegos se muestra un catálogo preliminar de especies destacadas de la aventura. La **Pokédex regional completa** se carga automáticamente desde PokéAPI la primera vez que abres cada juego con conexión y se conserva en el dispositivo. Los datos de encuentro de cada ficha se consultan al abrirla; con **Completar ubicaciones** puedes cachearlos para usarlos después offline. Los recorridos muestran las especies destacadas y amplían encuentros cuando sincronizas ubicaciones.
- Las fichas de PokéAPI incluyen **encuentros salvajes**, pero no siempre todos los regalos, eventos y evoluciones. Los avisos de la guía intentan cubrir casos clave sin prometer todos los métodos posibles.
- **Esmeralda Recharged**: los datos automáticos corresponden a Esmeralda original. No se presenta ningún dato modificado del hack como confirmado. Comprueba el DexNav del propio juego: https://whackahack.com/juegos/pokemon-recharged-emerald/

Fuentes de datos: [PokéAPI](https://pokeapi.co/docs/v2), datos editoriales y la anterior guía de Teselia Track. Aplicación no oficial, sin afiliación con Nintendo ni The Pokémon Company.

## Archivos

- `index.html`: interfaz inicial y contenedor principal.
- `style.css`: diseño responsive, animaciones, fichas, modo reducido.
- `app.js`: lógica, rutas, estado, almacenaje y carga de fuentes.
- `game-data.js`: juegos y capítulos del recorrido.
- `names.js`: nombres de Pokémon 1–809.
- `guides.js`: explicaciones para capturas especiales.
- `data/black.json`: guía completa preexistente de Pokémon Negro.
- `sw.js` y `manifest.webmanifest`: caché y experiencia PWA.
- `icon-180.png`, `icon-192.png`, `icon-512.png`: iconos.

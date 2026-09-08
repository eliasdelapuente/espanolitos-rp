# Españolitos RP

Landing page para **Españolitos RP**, una comunidad de roleplay inspirada en la experiencia *Emergency Hamburg* de Roblox. El proyecto presenta la comunidad, los tipos de actividad disponibles y un acceso directo a su página de comunidades en Roblox.

La web publicada está disponible en [espanolitos-rp.vercel.app](https://espanolitos-rp.vercel.app).

## Contenido de la página

- Portada con el mensaje “Un servidor que nunca se apaga”.
- Botón de acceso a Roblox.
- Contador de jugadores conectados a *Emergency Hamburg*, actualizado desde la API pública de Roblox cada minuto.
- Sección de presentación de Españolitos RP.
- Dos tarjetas de actividades:
  - **Trabaja**: proteger la ciudad, extinguir fuegos o curar jugadores.
  - **Roba**: intentar robar negocios repartidos por el mapa.
- Enlace a la búsqueda de la comunidad **ESPAÑOLITOSRP** en Roblox.
- Diseño adaptable para móvil y escritorio.

## Tecnologías

No utiliza frameworks ni dependencias de instalación. Está construida con HTML, CSS y JavaScript nativos.

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura y textos de la página. |
| `styles.css` | Estilos principales, distribución, tipografías y versión móvil. |
| `hero-logo.css` | Ajustes visuales del logo de fondo, tarjetas e iconos SVG. |
| `mobile-menu.css` | Estilos del menú desplegable en pantallas pequeñas. |
| `script.js` | Menú móvil y consulta del contador de jugadores de Roblox. |
| `emergency-hamburg-logo.png` | Imagen usada como fondo de la portada. |

## Ejecutar la web en local

Al ser una web estática, basta con abrir `index.html` en un navegador. Para evitar limitaciones del navegador al hacer peticiones externas, también puedes iniciarla con cualquier servidor estático local.

Por ejemplo, si tienes Python instalado:

```bash
cd /Users/eliasdelapuente/Proyectos/Web-EH
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Contador de jugadores

El contador usa el universo de Roblox `2992873140`, correspondiente a *Emergency Hamburg*. La petición se realiza a:

```text
https://games.roblox.com/v1/games?universeIds=2992873140
```

El valor mostrado procede del campo `playing` de la respuesta y se actualiza al cargar la página y después cada 60 segundos.

## Publicación

El proyecto está publicado en Vercel. Para desplegar los cambios más recientes, actualiza los archivos y súbelos al repositorio:

```bash
git add .
git commit -m "Describe el cambio realizado"
git push
```

Después se puede crear un nuevo despliegue en Vercel desde el proyecto `espanolitos-rp`.

## Créditos y aviso

Roblox, *Emergency Hamburg* y sus logotipos pertenecen a sus respectivos propietarios. Esta página se presenta como una comunidad no oficial.

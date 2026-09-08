const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

const count = document.querySelector('#playerCount');
const universeId = '2992873140';

async function updatePlayerCount() {
  if (!count) return;

  try {
    const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
    if (!response.ok) throw new Error('No se pudo consultar Roblox');

    const { data } = await response.json();
    const players = data?.[0]?.playing;
    if (typeof players === 'number') count.textContent = players.toLocaleString('es-ES');
  } catch (error) {
    console.warn('El contador de Roblox no pudo actualizarse.', error);
  }
}

updatePlayerCount();
setInterval(updatePlayerCount, 60_000);

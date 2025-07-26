function toggleView() {
  const profile = document.getElementById('profile-view');
  const player = document.getElementById('player-view');

  if (profile.classList.contains('hidden')) {
    profile.classList.remove('hidden');
    player.classList.add('hidden');
  } else {
    profile.classList.add('hidden');
    player.classList.remove('hidden');
  }
}

function createAtalytics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => counter++

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },
    getClicks() {
      if(destroyed) return 'Analytics is destroyd';
      return counter;
    }
  }
}

window.analytics = createAtalytics();
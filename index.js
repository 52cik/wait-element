/**
 * Wait for the DOM element to appear
 *
 * @param {string} selector the selector
 * @param {number} [timeout=10000] default 10 seconds
 */
function waitElement(selector, timeout = 10 * 1000) {
  timeout = Date.now() + timeout;

  return new Promise((resolve, reject) => {
    (function tick() {
      if (timeout < Date.now()) {
        return reject(Error('timeout'));
      }

      const el = document.querySelector(selector);

      if (el) {
        return resolve(el);
      }

      setTimeout(tick, 100);
    })();
  });
}

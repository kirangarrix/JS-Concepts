const debounce = (fn, delay) => {
  let id;
  console.log(`id at immediate Load :${id}`);

  return (...args) => {
    // console.log('args', ...args);
    console.log(`Previous id :${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      console.log('insideSetTimeout');
      fn(...args);
    }, delay);
  };
};

const InitApp = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    clickLog();
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 2000);
  });
};

const clickLog = () => console.log('clicked');

InitApp();

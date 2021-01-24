const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchInputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeByDefault();

themeSwitchInputRef.addEventListener('change', changeThemeFn);

function lightTheme() {
  bodyRef.classList.remove(Theme.DARK);
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}

function darkTheme() {
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
  localStorage.setItem('Theme', Theme.DARK);
}

function themeByDefault() {
  let lastStorageTheme = localStorage.getItem('Theme');
  if (lastStorageTheme === Theme.DARK) {
    darkTheme();
    themeSwitchInputRef.checked = true;
    return;
  }
  lightTheme();
}

function changeThemeFn(event) {
  if (event.target.checked === true) {
    darkTheme();
    return;
  }
  lightTheme();
}

// FIRST VARIANT
// function changeThemeFn() {
// const storageTheme = localStorage.getItem('Theme');
// if (storageTheme === Theme.LIGHT) {
//   darkTheme();
// }
// if (storageTheme === Theme.DARK) {
//   lightTheme();
// }
// }

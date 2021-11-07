let root = document.documentElement;
const themeSwitchers = document.querySelectorAll('.theme-switcher__switcher');
const themeSwitcherButton = document.querySelector('.theme-switcher__switcher');

function switchThemeToDark () {
  root.style.setProperty('--page-color', '#333333');
  root.style.setProperty('--primary-color', '#ffffff');
  root.style.setProperty('--secondary-color', '#E6E6E6');
  root.style.setProperty('--outline-color', '#707070');
  root.style.setProperty('--bikes-button-active-filter', 'brightness(100)');
  root.style.setProperty('--links-hover-opacity', '0.65');
  root.style.setProperty('--bikes-button-hover-opacity', '0.5');
  document.querySelector('.footer').style.setProperty('background-color', '#2F2F2F');
  document.querySelector('.lead__line').style.setProperty('--lead-line-background-color', '#707070');
  document.querySelector('.footer__email-input').style.setProperty('--footer-email-input-border', '1px solid rgba(125, 125, 125, 0.5)');
  document.querySelector('.footer__email-input').style.setProperty('--footer-email-input-focus-border', '1px solid #7D7D7D');
  document.querySelector('.footer__copyright').style.setProperty('color', '#565656');
  document.querySelector('.footer__logo').style.setProperty('filter', 'brightness(100)');
  themeSwitchers.forEach(element => {
    element.style.setProperty('background-color', '#545454');
  });
  document.querySelectorAll('.theme-switcher__light-theme-icon').forEach(element => {
    element.style.setProperty('background-image', 'url(../images/theme-switcher/light-theme-icon-dark.svg)');
  });
  document.querySelectorAll('.theme-switcher__dark-theme-icon').forEach(element => {
    element.style.setProperty('background-image', 'url(../images/theme-switcher/dark-theme-icon-dark.svg)');
  });
  document.querySelectorAll('.styles__button').forEach(element => {
    element.style.setProperty('background-color', '#434343');
    element.style.setProperty('background-image', 'url(../images/styles/button-theme-dark.svg)');
    element.style.setProperty('--styles-button-hover-opacity', '0.6');
    element.style.setProperty('--styles-button-hover-background-color', '#434343');
  });
}

function switchThemeToLight () {
  root.removeAttribute('style');
  document.querySelector('.footer').removeAttribute('style');
  document.querySelector('.lead__line').removeAttribute('style');
  document.querySelector('.footer__email-input').removeAttribute('style');
  document.querySelector('.footer__copyright').removeAttribute('style');
  document.querySelector('.footer__logo').style.setProperty('filter', 'brightness(100)');
  themeSwitchers.forEach(element => {
    element.removeAttribute('style');
  });
  document.querySelectorAll('.theme-switcher__light-theme-icon').forEach(element => {
    element.removeAttribute('style');
  });
  document.querySelectorAll('.theme-switcher__dark-theme-icon').forEach(element => {
    element.removeAttribute('style');
  });
  document.querySelectorAll('.styles__button').forEach(element => {
    element.removeAttribute('style');
  });
}

themeSwitchers.forEach(switcher => {
  switcher.addEventListener('click', () => {
    if (themeSwitcherButton.classList.contains('theme-switcher__switcher_theme-dark')) {
      themeSwitchers.forEach(switcher => {
        switcher.classList.remove('theme-switcher__switcher_theme-dark');
      });
      switchThemeToLight();
    }
    else {
      themeSwitchers.forEach(switcher => {
        switcher.classList.add('theme-switcher__switcher_theme-dark');
      });
      switchThemeToDark();
    }
  })
})


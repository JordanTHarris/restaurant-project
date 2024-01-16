import './style.css';
import mainPage from './main-page';
import menuPage from './menu-page';
import contactPage from './contact-page';

const content = document.getElementById('content');

function tabListeners() {
  const tabs = document.querySelectorAll('.tablinks');
  const main = mainPage();
  const menu = menuPage();
  const contact = contactPage();

  tabs.forEach((tab) => {
    tab.addEventListener('click', (ev) => {
      // remove active from all tab buttons
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      // Then set active for the correct tab and replace content
      if (ev.target.id === 'main-tab') {
        tab.classList.add('active');
        content.replaceChildren(main);
      } else if (ev.target.id === 'menu-tab') {
        tab.classList.add('active');
        content.replaceChildren(menu);
      } else if (ev.target.id === 'contact-tab') {
        tab.classList.add('active');
        content.replaceChildren(contact);
      }
    });
  });

  // Load main by default
  document.getElementById('main-tab').click();
}

tabListeners();
document.body.appendChild(content);

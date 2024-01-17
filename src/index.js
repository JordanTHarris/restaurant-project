import './style.css';
import mainPage from './main-page';
import menuPage from './menu-page';
import contactPage from './contact-page';

const content = document.getElementById('content');

function createTabLogic() {
  const tabs = document.querySelectorAll('.tablinks');
  const main = mainPage();
  const menu = menuPage();
  const contact = contactPage();

  for (const tab of tabs) {
    tab.addEventListener('click', () => {
      // remove active from all tab buttons
      tabs.forEach((tab) => tab.classList.remove('active'));
      // then add active to current tab
      tab.classList.add('active');

      // replace content with corresponding tab
      if (tab.id === 'main-tab') {
        content.replaceChildren(main);
      } else if (tab.id === 'menu-tab') {
        content.replaceChildren(menu);
      } else if (tab.id === 'contact-tab') {
        content.replaceChildren(contact);
      }
    });
  }

  // Click main by default
  document.getElementById('main-tab').click();
}

createTabLogic();
document.body.appendChild(content);

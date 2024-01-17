function contactComponent() {
  const element = document.createElement('div');
  element.id = 'contact';

  const title = document.createElement('h1');
  const phoneNumber = document.createElement('div');
  const address = document.createElement('div');
  const map = createMap();

  title.id = 'contact-title';
  title.textContent = 'Contact Us';

  phoneNumber.id = 'phone-number';
  phoneNumber.textContent = '123-456-7890';

  address.id = 'address';
  address.textContent = '25 Ellis St NE, Atlanta, GA 30303';

  element.appendChild(title);
  element.appendChild(phoneNumber);
  element.appendChild(address);
  element.appendChild(map);
  return element;
}

function createMap() {
  const map = document.createElement('iframe');
  map.id = 'google-maps';
  map.src =
    'https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d986.1768746531768!2d-84.38691093327049!3d33.75832989997066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d33.75864679935642!2d-84.38625385468929!5e0!3m2!1sen!2sus!4v1705439135177!5m2!1sen!2sus';
  map.allowFullscreen = '';
  map.loading = 'lazy';
  map.referrerpolicy = 'no-referrer-when-downgrade';
  return map;
}

export default contactComponent;

import MainImage from './images/main-page-image.jpg';

function mainComponent() {
  const element = document.createElement('div');
  element.id = 'main';

  const h1 = document.createElement('h1');
  h1.textContent = 'My Awesome Restaurant';

  const image = new Image();
  image.src = MainImage;
  image.id = 'main-image';

  const description = document.createElement('div');
  description.textContent = 'Come join us for a quality meal and a friendly atmosphere';

  element.appendChild(h1);
  element.appendChild(image);
  element.appendChild(description);
  return element;
}

export default mainComponent;

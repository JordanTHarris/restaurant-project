import MainImage from './images/main-page-image.jpg';

function mainComponent() {
  const element = document.createElement('div');
  const image = new Image();
  const textContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const description = document.createElement('div');

  element.id = 'main';

  image.src = MainImage;
  image.id = 'main-image';

  textContainer.id = 'main-text-container';

  h1.textContent = "Seafood Sam's";
  h1.id = 'main-title';

  description.textContent = 'Come join us for a quality meal and a friendly atmosphere';
  description.id = 'main-description';

  element.appendChild(image);
  textContainer.appendChild(h1);
  textContainer.appendChild(description);
  // element.appendChild(h1);
  // element.appendChild(description);
  element.appendChild(textContainer);
  return element;
}

export default mainComponent;

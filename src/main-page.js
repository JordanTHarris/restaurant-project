function mainComponent() {
  const element = document.createElement('div');
  const textContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const description = document.createElement('div');

  element.id = 'main';

  textContainer.id = 'main-text-container';

  h1.textContent = "Seafood Sam's";
  h1.id = 'main-title';

  description.textContent = 'Come join us for a quality meal and a friendly atmosphere';
  description.id = 'main-description';

  textContainer.appendChild(h1);
  textContainer.appendChild(description);
  element.appendChild(textContainer);
  return element;
}

export default mainComponent;

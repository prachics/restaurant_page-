function loadHome() {
    const content = document.getElementById('content');
    content.textContent = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
  
    const image = document.createElement('img');
    image.src = 'https://img.freepik.com/premium-photo/famous-food-dish-isolated-white-background_941097-218087.jpg?w=826'; // Replace with your image URL
    image.alt = 'Restaurant Image';
  
    const description = document.createElement('p');
    description.textContent = 'Our restaurant offers the best dishes made from fresh ingredients. Come and enjoy a wonderful dining experience!';
  
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
  }
  
  export default loadHome;
  
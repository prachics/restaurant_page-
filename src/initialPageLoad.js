function initialPageLoad() {
    const content = document.getElementById('content');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
  
    const image = document.createElement('img');
    image.src = 'https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?w=1380&t=st=1722383649~exp=1722384249~hmac=7ffe11a6fb7cbc786cef0c9c42fa29214a09c6bcd46608baf6969254a453699a'; // Replace with your image URL
    image.alt = 'Restaurant Image';
  
    const description = document.createElement('p');
    description.textContent = 'Our restaurant offers the best dishes made from fresh ingredients. Come and enjoy a wonderful dining experience!';
  
    // Append elements to the content div
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
  }
  
  export default initialPageLoad;
  
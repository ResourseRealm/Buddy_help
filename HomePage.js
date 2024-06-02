document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[type="search"]');
    const searchButton = document.querySelector('.search-bar button');
    const serviceItems = document.querySelectorAll('.service-categories ul li');
  
    function filterServices() {
      const searchTerm = searchInput.value.toLowerCase();
  
      serviceItems.forEach(item => {
        const serviceText = item.textContent.toLowerCase();
        if (serviceText.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    searchButton.addEventListener('click', filterServices);
    
    searchInput.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        filterServices();
      }
    });
  });
  
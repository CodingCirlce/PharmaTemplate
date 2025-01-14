// Function to open the popup
function openPopup(image) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = image.src;
    popup.style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
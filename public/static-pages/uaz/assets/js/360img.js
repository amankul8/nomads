function generateUazImages(containerId, startNum = 1, endNum = 71) {
    const container = document.getElementById(containerId);
    
    if (!container) {;
      return;
    }
  
    let html = '';
    html += `<img src="http://localhost:3000/static-pages/uaz/assets/img/UAZ 360/uaz-${startNum}.jpg"
                class="configurator-car-image__item"
                style="display: block;">\n`;
    for (let i = startNum+1; i <= endNum; i++) {
      html += `<img src="http://localhost:3000/static-pages/uaz/assets/img/UAZ 360/uaz-${i}.jpg" 
                   class="configurator-car-image__item"
                   style="display: none;">\n`;
    }
    
    container.innerHTML = html;
  }
generateUazImages('360-images'); 
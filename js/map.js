var map = L.map('map').setView([40.69383831641044, -73.95093726346713], 12);
      L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=zYPio0unAhxQQkpTKlym',{
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        crossOrigin: true
      }).addTo(map);

      var markera = L.marker([40.709964042784314, -73.95103008251083]).addTo(map).bindPopup('<a href="https://www.modernlovebrooklyn.com/">Modern Love</a>').openPopup();
      var markerb = L.marker([40.71109507718998, -73.9537820309993]).addTo(map).bindPopup('<a href="https://www.lighthousebk.com/">Lighthouse</a>').openPopup();
      var markerc = L.marker([40.64045249204978, -73.96760141587855]).addTo(map).bindPopup('<a href="http://www.thefarmonadderley.com/">The Farm on Adderly</a>').openPopup();
      var markerd = L.marker([40.712762698184726, -73.94881527902544]).addTo(map).bindPopup('<a href="http://www.okonomibk.com/">Okonomi</a>').openPopup();
      var markere = L.marker([40.716400751619446, -73.96586008344289]).addTo(map).bindPopup('<a href="https://www.sundayinbrooklyn.com/">Sunday in Brooklyn</a>').openPopup();
      var markerf = L.marker([40.67815320234139, -73.96859168287764]).addTo(map).bindPopup('<a href="https://www.nourishthai.com/">Nourish</a>').openPopup();

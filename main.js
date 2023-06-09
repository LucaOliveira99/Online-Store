

const galleryImages = [
   {
      src: "./assets/gallery/image1.jpg",
      alt: "Thumbnail Image 1"
   },
   {
      src: "./assets/gallery/image2.jpg",
      alt: "Thumbnail Image 2"
   },
   {
      src: "./assets/gallery/image3.jpg",
      alt: "Thumbnail Image 3"
   },

];

/* MENU SECTION */

function menuHandler() {

   document.querySelector("#open-nav-menu").addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open")
   });
   document.querySelector("#close-nav-menu").addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.remove("nav-open")
   });
}

/* TEMPERATURE CONVERSION */

function celsiusToFahr(temperature) {
   let fahr = (temperature * 9 / 5) + 32
   return fahr
};

/* GREETING SECTION */

function greetingHandler() {
   let currentHour = new Date().getHours();
   let greettingText;

   if (currentHour < 12) {
      greettingText = "Good Morning!"
   } else if (currentHour < 19) {
      greettingText = "Good Afternoon!"
   } else if (currentHour < 24) {
      greettingText = "Good Evening!"
   } else {
      greettingText = "Welcome!"
   }

   const weatherCondition = "sunny";
   const userLocation = "Salvador";
   let temperature = "33";

   let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature} °C outside.`;
   let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature)} °F outside.`;

   document.querySelector("#greeting").innerHTML = greettingText;
   document.querySelector('p#weather').textContent = celsiusText;

   /* CONVERT BUTTON */

   document.querySelector(".weather-group").addEventListener("click", function (event) {

      if (event.target.id == "celsius") {
         document.querySelector('p#weather').textContent = celsiusText;
      } else if (event.target.id == "fahr") {
         document.querySelector('p#weather').textContent = fahrText;
      }

   });


}

/* LOCAL TIME SECTION */

function clockHandler() {
   setInterval(function () {
      let localTime = new Date();
      document.querySelector("span[data-time=hours]").textContent = new Date().getHours().toString().padStart(2, "0");
      document.querySelector("span[data-time=minutes]").textContent = new Date().getMinutes().toString().padStart(2, "0");
      document.querySelector("span[data-time=seconds]").textContent = new Date().getSeconds().toString().padStart(2, "0");
   }, 1000)

}

/* GALLERY SECTION */

function galleryHandler() {
   let mainImage = document.querySelector("#gallery > img");
   let thumbnails = document.querySelector("#gallery .thumbnails");


   mainImage.src = galleryImages[0].src;
   mainImage.alt = galleryImages[0].alt;


   galleryImages.forEach(function (image, index) {
      let thumb = document.createElement("img");
      thumb.src = image.src;
      thumb.alt = image.alt;
      thumb.dataset.arrayIndex = index;
      thumb.dataset.selected = index === 0 ? true : false;

      thumb.addEventListener("click", function (e) {
         let selectedIndex = e.target.dataset.arrayIndex;
         let selectedImage = galleryImages[selectedIndex]
         mainImage.src = selectedImage.src;
         mainImage.alt = selectedImage.alt;

         thumbnails.querySelectorAll("img").forEach(function (img) {
            img.dataset.selected = false
         });

         e.target.dataset.selected = true

      });

      thumbnails.appendChild(thumb);

   })
};

// PAGE LOAD

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
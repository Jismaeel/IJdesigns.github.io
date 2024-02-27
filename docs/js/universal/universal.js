// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
//   } else {
//     document.documentElement.classList.remove('dark');
//   };
  
//   function setDarkTheme() {
//     document.documentElement.classList.add("dark");
//     localStorage.theme = "dark";
//   };
  
//   function setLightTheme() {
//     document.documentElement.classList.remove("dark");
//     localStorage.theme = "light";
//   };
  
//   function onThemeSwitcherItemClick(event) {
//     const theme = event.target.dataset.theme;
  
//     if (theme === "system") {
//       localStorage.removeItem("theme");
//       setSystemTheme();
//     } else if (theme === "dark") {
//       setDarkTheme();
//     } else {
//       setLightTheme();
//     }
//   };
  
//   const themeSwitcherItems = document.querySelectorAll("#theme-switcher");
//   themeSwitcherItems.forEach((item) => {
//     item.addEventListener("click", onThemeSwitcherItemClick);
//   });

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//         duration: 800 // Adjust this value (in milliseconds) for slower or faster scrolling
//       });
//     });
//   });


   // Function to show the spinner
 function showSpinner() {
  document.getElementById('spinner').classList.remove('hidden');
}

// Function to hide the spinner and show the content
function hideSpinnerAndShowContent() {
  document.getElementById('spinner').classList.add('hidden');
  document.getElementById('content').classList.remove('hidden');
}

// Simulate an asynchronous operation (e.g., fetching data)
function simulateAsyncOperation() {
  showSpinner();

  // Simulate a delay (replace this with your actual async operation)
  setTimeout(function () {
      hideSpinnerAndShowContent();
  }, 2000); // Change 2000 to your desired delay in milliseconds
}

// Call the function to start the process
simulateAsyncOperation();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

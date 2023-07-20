window.addEventListener("load", () => {
   document.querySelector('body').classList.add('Loaded');
   document.querySelector('body').style.maxHeight = window.innerHeight + "px";
   
   window.addEventListener("resize", (e) => {
      document.querySelector('body').style.maxHeight = window.innerHeight + "px";
   });

});
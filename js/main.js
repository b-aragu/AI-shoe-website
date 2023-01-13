  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  setTimeout(function(){
      document.getElementById("popup").style.display = "block";
  }, 3000); // 120000 milliseconds = 2 minutes
  
  document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.querySelector('.hidden').classList.toggle('hidden');
    }, 6000);
});

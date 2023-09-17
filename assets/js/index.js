const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  const hIcon = cards[i].getElementsByClassName("hIcon")[0];
  const hiddenHeart = cards[i].getElementsByClassName("hiddenHeart")[0];
  const sIcon = cards[i].getElementsByClassName("sIcon")[0];
  const hiddenSearch = cards[i].getElementsByClassName("hiddenSearch")[0];

  hIcon.addEventListener("mouseover", function () {
    hiddenHeart.style.visibility = "visible"; 
  });

  hIcon.addEventListener("mouseout", function () {
    hiddenHeart.style.visibility = "hidden";
  });

  sIcon.addEventListener("mouseover", function () {
    hiddenSearch.style.visibility = "visible";
  });

  sIcon.addEventListener("mouseout", function () {
    hiddenSearch.style.visibility = "hidden";
  });
}

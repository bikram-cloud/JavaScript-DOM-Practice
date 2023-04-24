const accordin = document.getElementsByClassName('content-container');

for (i = 0; i < accordin.length; i++) {
  accordin[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

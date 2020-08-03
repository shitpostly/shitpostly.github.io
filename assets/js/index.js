document.addEventListener('DOMContentLoaded', function () {
  /* init buttons */
  document.querySelector('a.jump-button').addEventListener('click', function (e) {
    document.querySelector('.install').scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();
  });

  document.querySelector('a[href="#help"]').addEventListener('click', function (e) {
    document.querySelector('.tutorial').classList.add('visible');
    e.preventDefault();
  });
  document.querySelector('a[href="#close"]').addEventListener('click', function (e) {
    document.querySelector('.tutorial').classList.remove('visible');
    e.preventDefault();
  });

  /* initial animation */
  window.scrollTo({ top: 0 });

  let nameContainer = document.querySelector('.top .brand .name');
  let name = nameContainer.innerText;
  nameContainer.innerHTML = '';
  for (ci in name) {
    nameContainer.innerHTML += `<span class="letter">${name[ci]}</span>`;
  }

  let letters = nameContainer.getElementsByClassName('letter');
  for (let li = 0; li < letters.length; li ++) {
    window.setTimeout(function () {
      letters[li].style.opacity = 1;
    }, li * 80 + 200);
  }

  document.body.classList.add('content-loaded');

  /* include bookmarklet from repo */
  let bookmarkletButton = document.querySelector('a.button.bookmarklet-button');
  fetch('https://raw.githubusercontent.com/shitpostly/bookmarklet/master/bookmarklet.min.js')
    .then(response => response.text())
    .then((data) => {
      bookmarkletButton.href = data
    });
});

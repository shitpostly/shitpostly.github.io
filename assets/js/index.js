document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('a.jump-button').addEventListener('click', function (e) {
    document.querySelector('.install').scrollIntoView({behavior: 'smooth'});
    e.preventDefault();
  });

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
});

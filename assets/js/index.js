document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('a.jump-button').addEventListener('click', function (e) {
    document.querySelector('.install').scrollIntoView({behavior: 'smooth'});
    e.preventDefault();
  });
});

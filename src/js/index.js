(function () {
  document.addEventListener('click', function (e) {
    if (e.target?.classList.contains('unlocked')) {
      alert('This will change the button text on the next update');
    }
  })
})();
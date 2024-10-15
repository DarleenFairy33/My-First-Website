window.addEventListener("load", function() {
  const form = document.getElementById('Contact-Darleen');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thank you! you will be contacted in 1-3 biz days by darleen!");
    })
  });
});

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
  // Check to see if 100% of the <hr> is on-screen...
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // Button now clickable, so stop observing.
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

// Watch for the <hr> element, this ensuring that ALL of the
// last <p> has been viewed.
ob.observe(terms.lastElementChild);

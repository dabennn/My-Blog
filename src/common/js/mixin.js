export default {
  methods: {
    goAnchor(selector, el) {
      let anchor = el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop;
    }
  }
};

export default {
  methods: {
    goAnchor(selector, el) {
      if(selector && el){
        let anchor = el.querySelector(selector);
        document.body.scrollTop = anchor.offsetTop;
      }
      return;
    }
  }
};

// mixin.js file
export default {
  created: function () {
    // this.hello();
  },
  methods: {
    hello: function () {
      console.log('hello from mixin number!')
    },
    numberWithPercent: (number) => {
      return `${number}%`;
    },
    numberWithCommas: (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
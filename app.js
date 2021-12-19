const app = Vue.createApp({
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,
      currentOperatorSign: null,
    };
  },
  methods: {
    clear() {
      this.current = "";
      this.previous = null;
      this.operator = null;
      this.operatorClicked = false;
      this.currentOperatorSign = null;
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      if (this.current) {
        this.previous = this.current;
      }
      this.current = "";
      this.operatorClicked = true;
    },
    divide(sign) {
      if (this.current && this.previous) {
        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.current = "";
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => b / a;
      this.currentOperatorSign = sign;
    },
    times(sign) {
      if (this.current && this.previous) {
        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.current = "";
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => a * b;
      this.currentOperatorSign = sign;
    },
    minus(sign) {
      if (this.current && this.previous) {
        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.current = "";
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => b - a;
      this.currentOperatorSign = sign;
    },
    add(sign) {
      if (this.current && this.previous) {
        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.current = "";
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => a + b;
      this.currentOperatorSign = sign;
    },
    equal() {
      if (this.current && this.previous) {
        this.current = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.previous = null;
        this.operatorClicked = true;
      }
    },
  },
  computed: {
    getNum() {
      return parseFloat(this.current);
    },
  },
});

app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.current = "";
      this.previous = null;
      this.operator = null;
      this.operatorClicked = false;
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
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
      console.log(this.current);
      if (this.current) {
        this.previous = this.current;
      }
      this.current = "";
      this.operatorClicked = true;
    },
    divide() {
      if (this.current && this.previous) {
        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => b / a;
    },
    times() {
      if (this.current && this.previous) {
        console.log("again plus");

        this.previous = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.operatorClicked = true;
      } else {
        this.setPrevious();
      }
      this.operator = (a, b) => a * b;
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
      // this.append(sign)
    },
    add(sign) {
      if (this.current && this.previous) {
        console.log("again plus");
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
      // this.append(sign)
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

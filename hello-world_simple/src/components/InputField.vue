<template>
  <div class="input-wrap">
    <label>{{name}}</label>
    <span :style="onChangeColor">status {{name}}: {{localStatus[name]}}</span>
    <input
      :name="name"
      @keydown="isValid"
      @input="onInput($event , index)"
      type="text"
      :value="value"
    >
  </div>
</template>

<script>
import CurrentStatus from "./CurrentStatus";
import logo from "../assets/logo.png";

export default {
  props: ["name", "value", "pattern", "index", "status"],
  data() {
    return {
      currentName: this.name,
      localStatus: this.status,
      localStyle: {}
    };
  },
  localStyle: {
    color: "red"
  },
  localStatus: {},
  methods: {
    isValid() {},
    onInput(event, index) {
      this.localStatus = this.status;
      this.$emit("changeData", { event, index });
    }
  },
  computed: {
    onChangeColor() {
      if (this.localStatus[this.currentName] === "YES") {
        return { color: "green" };
      }
    }
  },
  components: {
    // CurrentStatus
  }
};
</script>

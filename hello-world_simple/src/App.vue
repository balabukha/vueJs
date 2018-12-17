<template>
  <div class="wrapper">
    <form @submit.prevent="isSubmitted = true" v-if="!isSubmitted">
      <div class="progress-bar-wrapper" :style="progressBarWidth">
        <div class="progress-bar"></div>
      </div>

      <InputField
        v-for="(item, index) in info"
        :key="index"
        :index="index"
        :name="item.name"
        :value="item.value"
        :pattern="item.pattern"
        :status="status"
        @changeData="onChangeData"
      ></InputField>

      <button :disabled="true">Send Data</button>
    </form>
    <div class="sub-wrapper" v-else>
      <h5>Some data if Submitted</h5>
    </div>
  </div>
</template>

<script>
import InputField from "./components/InputField";

export default {
  data() {
    return {
      progressBarWidth: "0%",
      done: 0,
      isSubmitted: false,
      status: {
        Name: "",
        Phone: "",
        Email: "",
        SomeField1: "",
        SomeField2: ""
      },
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/
        },
        {
          name: "SomeField1",
          value: "",
          pattern: /.+/
        },
        {
          name: "SomeField2",
          value: "",
          pattern: /.+/
        }
      ]
    };
  },
  methods: {
    onChangeData({ event, index }) {
      this.info[index].value = event.target.value;
      if (this.info[index].pattern.test(event.target.value)) {
        this.status[event.target.name] = "YES";
      } else {
        this.status[event.target.name] = "NO";
      }
    }
  },
  components: {
    InputField
  },
  computed: {}
};
</script>

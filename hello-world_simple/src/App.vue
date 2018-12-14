<template>
  <div class="wrapper">
    <form @submit.prevent="isSubmitted = true" v-if="!isSubmitted">
      <div class="progress-bar-wrapper" :style="progressBarWidth">
        <div class="progress-bar"></div>
      </div>

      <InputField
        v-for="(item, index) in info"
        :key="index"
        :name="item.name"
        :value="item.value"
        :pattern="item.pattern"
        @changeData="onChangeData"
      ></InputField>
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
          name: "Some Field 1",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/
        }
      ]
    };
  },
  methods: {
    onChangeData() {
      console.log("onChangeData");
    }
  },
  components: {
    InputField
  }
};
</script>

<template>
  <div class="status-wrapper">
	  <span>status {{currentName}}: {{subStatus.currentName}}</span>
  </div>
</template>

<script>
export default {
  props: ['currentName', 'status'],
  data() {
    return {
      // subStatus: this.status
    };
  },
  subStatus: status
  //   computed: {
  //     onStatus() {
  //       if (currentStatus === true) this.subStatus = 'YES';
  //       if (currentStatus === false) this.subStatus = 'NO';
  //     }
  //   }
};
</script>

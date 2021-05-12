<template>
  <button style="min-width: 200px; min-height: 300px;">
		<slot></slot>
	</button>
</template>
<script>
//import Button from "ant-design-vue/lib/button";
export default {
  name: "MhButton",
  setup() {
  },
  created(){
    console.log('it works! 2');
  }
  // components: {
  //   [Button.name]: Button
  // }
};
</script>

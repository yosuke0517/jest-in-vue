<template>
  <input type="text" :value="value" />
</template>

<script>
export default {
  name: "OurInput",
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

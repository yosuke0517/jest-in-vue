<template>
    <div class="OurInputWrapper">
        <p>text</p>
        <OurInput data-testid="ourInput" :value="'hogehoge'"/>
    </div>
</template>

<script>
    import OurInput from "./OurInput";
    export default {
        name: "OurInputWrapper.vue",
        components: { OurInput }
    }
</script>

<style scoped>

</style>
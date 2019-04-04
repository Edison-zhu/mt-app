<template>
  <div class="m-geo">
    <i class="el-icon-location">北京市</i>
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换城市</nuxt-link>
    [上海 杭州 南京]
  </div>
</template>

<script>
    export default {
        name: "geo"
    }
</script>

<style scoped>

</style>

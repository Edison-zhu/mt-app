<template>
  <div class="page-index">
    <el-row>
      <el-col :span="1">
        <Emenu/>
      </el-col>
      <el-col></el-col>
    </el-row>
    <el-row>
      3
    </el-row>
  </div>
</template>

<script>
import Emenu from '../components/index/menu'
export default {
  components: {
    Emenu
  }
}
</script>

<style lang="scss">
  @import "../assets/css/index/index";
</style>

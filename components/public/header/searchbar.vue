<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in searchList":key="index">{{item}}</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item,index) in hotPlace":key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">上海野生动物园</a>
          <a href="#">上海欢乐谷</a>
          <a href="#">迪士尼乐园</a>
          <a href="#">上海辰山植物园</a>
          <a href="#">顾村公园</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li><i class="refund"></i><p class="txt">随时退</p></li>
          <li><i class="single"></i><p class="txt">不满意免单</p></li>
          <li><i class="overdue"></i><p class="txt">临时退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          search:'',
          isFocus:false,
          hotPlace:['迪士尼度假区','海昌海洋公园','陆家嘴金融区','上海欢乐谷'],
          searchList:['网红小吃','打卡拍照','艺术展览','重庆火锅','泰国菜']
        }
      },
      computed:{
        isHotPlace:function () {
          return this.isFocus&&this.search
        },
        isSearchList:function () {
          return this.isFocus&&this.search
        }
      },
      methods:{
        focus:function () {
          this.isFocus=true
        },
        blur:function () {
          let self = this
          setTimeout(function () {
            self.isFocus
          },100)
        },
        input:function () {
          console.log('input')
        }
      }
    }
</script>

<style scoped>

</style>

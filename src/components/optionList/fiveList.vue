<template>
  <div>
    <div class="cateLine">
      <div class="block">
        <span class="demonstration">横坐标文字大小</span>
        <el-slider v-model="XTextSize"></el-slider>
      </div>
    </div>
     <div class="cateLine">
      <div class="block">
        <span class="demonstration">纵坐标文字大小</span>
        <el-slider v-model="YTextSize"></el-slider>
      </div>
    </div>
    <div class="cateLine">
      <div class="block">
        <span class="demonstration">标 题 文 字 大 小</span>
        <el-slider v-model="TitleSize"></el-slider>
      </div>
    </div>
    <div class="cateLine">
      <div class="block">
        <span class="demonstration">X 轴 旋 转 角 度</span>
        <el-slider v-model="Xsize"></el-slider>
      </div>
    </div>
    <div class="cateLine">
      <div class="block">
        <span class="demonstration">Y 轴 旋 转 角 度</span>
        <el-slider v-model="Ysize"></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      XTextSize:12,
      YTextSize:16,
      TitleSize:16,
      Xsize:1,
      Ysize:44,
    };
  }
};
</script>

<style>
</style>
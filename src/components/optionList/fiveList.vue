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
      XTextSize: 12,
      YTextSize: 16,
      TitleSize: 16,
      Xsize: 22,
      Ysize: 44
    };
  },
  methods: {
    XTextSizeA() {
      PubSub.publish("XTextSize-mode", { model: "XTextSize", mess: this.XTextSize });
    },
    YTextSizeA() {
      PubSub.publish("YTextSize-mode", { model: "YTextSize", mess: this.YTextSize });
    },
    TitleSizeA() {
      PubSub.publish("TitleSize-mode", { model: "TitleSize", mess: this.TitleSize });
    },
    XsizeA() {
      PubSub.publish("Xsize-mode", { model: "Xsize", mess: this.Xsize });
    },
    YsizeA() {
      PubSub.publish("Ysize-mode", { model: "Ysize", mess: this.Ysize });
    }
  },
  watch: {
    XTextSize(XTextSize) {
      this.XTextSizeA();
    },
    YTextSize(YTextSize) {
      this.YTextSizeA();
    },
    TitleSize(TitleSize) {
      this.TitleSizeA();
    },
    Xsize(Xsize) {
      this.XsizeA();
    },
    Ysize(Ysize) {
      this.YsizeA();
    }
  }
};
</script>

<style>
</style>
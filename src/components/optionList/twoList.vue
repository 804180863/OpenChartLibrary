<template>
  <div class="Rone">
    <div class="Ronetitle"></div>
    <div class="Ronetitle">图表线颜色</div>

    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </div>
    <div class="Ronetitle">横纵轴线颜色</div>

    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color2"></el-color-picker>
      </div>
    </div>
    <div class="Ronetitle">背景颜色</div>

    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color3"></el-color-picker>
      </div>
    </div>
    <div class="Ronetitle">文字颜色</div>
    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color4"></el-color-picker>
      </div>
    </div>
     <div class="Ronetitle">标题颜色</div>
    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color5"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#409EFF",
      color2: "#000000",
      color3: "#FFFFFF",
      color4: "#000000",
      color5: "#000000"
    };
  },
  mounted() {
    this.Ccolor1();
    this.Ccolor2();
    this.Ccolor3();
    this.Ccolor4();
    this.Ccolor5();
  },
  methods: {
    Ccolor1() {
      PubSub.publish("color1-close", { model: "color1", mess: this.color1 });
    },
    Ccolor2() {
      PubSub.publish("color2-close", { model: "color2", mess: this.color2 });
    },
    Ccolor3() {
      PubSub.publish("color3-close", { model: "color3", mess: this.color3 });
    },
    Ccolor4() {
      PubSub.publish("color4-close", { model: "color4", mess: this.color4 });
    },
     Ccolor5() {
      PubSub.publish("color5-close", { model: "color5", mess: this.color5 });
    }
  },
  watch: {
    color1(color1) {
      this.Ccolor1();
    },
    color2(color2) {
      this.Ccolor2();
    },
    color3(color3) {
      this.Ccolor3();
    },
    color4(color4) {
      this.Ccolor4();
    },
    color5(color5) {
      this.Ccolor5();
    }
  }
};
</script>

<style>
.el-color-picker__trigger {
  width: 160px;
}
.Rone {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.cateList {
  width: 100%;
  height: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Ronetitle {
  width: 100%;
  height: 2%;
  text-align: center;
  font-weight: 700;
}
.cateListblock {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
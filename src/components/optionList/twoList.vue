<template>
  <div class="Rone">
    <div class="Ronetitle"></div>
    <div class="Ronetitle">图表颜色</div>

    <div class="cateList">
      <div class="block">
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#409EFF"
    };
  },
  mounted() {
    this.Ccolor();
  },
  methods: {
    Ccolor() {
      PubSub.publish("color1-close", { model: "color1", mess: this.color1 });
    }
  },
  watch: {
    color1(color1) {
      this.Ccolor();
    }
  }
};
</script>

<style>
.el-color-picker__trigger{
      width: 160px;
}
.Rone {
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
</style>left
<template>
  <div class="Rone">
    <div class="Ronetitle"></div>
    <div class="Ronetitle">图表类型</div>
    <div class="cateList">
      <el-radio v-model="radio" label="line">折线图</el-radio>
      <el-radio v-model="radio" label="bar">柱状图</el-radio>
    </div>
    <div class="cateList">
      <el-radio v-model="radio" label="scatter">散点图</el-radio>
      <el-radio v-model="radio" label="pie">饼状图</el-radio>
    </div>
    <div class="cateList">
      <el-radio v-model="radio" label="sunburst">太阳图</el-radio>
      <el-radio v-model="radio" label="radar">雷达图</el-radio>
    </div>

    <el-divider></el-divider>
    <Linex v-if="radio == 'line'" />
    <Bar v-if="radio == 'bar'" />
    <Scatter v-if="radio == 'scatter'" />
    <Pie v-if="radio == 'pie'" />
    <Sunburst v-if="radio == 'sunburst'" />
    <Radar v-if="radio == 'radar'" />
  </div>
</template>

<script>
import Linex from "../OptionForCharts/Line";
import Bar from "../OptionForCharts/Bar";
import Pie from "../OptionForCharts/Pie";
import Radar from "../OptionForCharts/Radar";
import Scatter from "../OptionForCharts/Scatter";
import Sunburst from "../OptionForCharts/Sunburst";
import PubSub from "pubsub-js";
export default {
  components: {
    Linex,
    Bar,
    Pie,
    Radar,
    Scatter,
    Sunburst
  },
  data() {
    return {
      radio: "line"
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    close() {
      PubSub.publish("model-close", { model: "model1", mess: this.radio });
    }
  },
  watch: {
    radio(radio) {
      this.close();
    }
  }
};
</script>

<style>
.Rone {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.Ronetitle {
  width: 100%;
  height: 2%;
  text-align: center;
  font-weight: 700;
}
</style>
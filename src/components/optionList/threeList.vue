<template>
  <div class="Rone">
    <div class="Ronetitle"></div>
    <div class="Ronetitle">图表类型</div>
    <div class="cateList">
      <el-radio v-model="radio" label="1">折线图</el-radio>
      <el-radio v-model="radio" label="2">柱状图</el-radio>
    </div>
    <div class="cateList">
      <el-radio v-model="radio" label="3">散点图</el-radio>
      <el-radio v-model="radio" label="4">饼状图</el-radio>
    </div>
    <div class="cateList">
      <el-radio v-model="radio" label="5">散点图</el-radio>
      <el-radio v-model="radio" label="6">饼状图</el-radio>
    </div>
    <el-divider></el-divider>

    <div class="cateListblock">
      <div class="block">
        <span class="demonstration">图表数据点大小(Size)</span>
        <el-slider v-model="value1"></el-slider>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="Ronetitle">列映射</div>
    <div class="cateList">
      <el-select v-model="value" placeholder="X轴">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="cateList">
      <el-select v-model="valuex" placeholder="Y轴">
        <el-option
          v-for="item in options1"
          :key="item.valuex"
          :label="item.label"
          :value="item.valuex"
        ></el-option>
      </el-select>
    </div>
    <div class="cateList">
      <el-select v-model="value" placeholder="Z轴" disabled>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      value1: 0,
      options: [
        {
          value: "选项1",
          label: "X轴:黄金糕"
        },
        {
          value: "选项2",
          label: "X轴:双皮奶"
        },
        {
          value: "选项3",
          label: "X轴:蚵仔煎"
        },
        {
          value: "选项4",
          label: "X轴:龙须面"
        },
        {
          value: "选项5",
          label: "X轴:北京烤鸭"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "Y轴:黄金糕"
        },
        {
          value: "选项2",
          label: "Y轴:双皮奶"
        },
        {
          value: "选项3",
          label: "Y轴:蚵仔煎"
        },
        {
          value: "选项4",
          label: "Y轴:龙须面"
        },
        {
          value: "选项5",
          label: "Y轴:北京烤鸭"
        }
      ],
      value: "",
      valuex: ""
    };
  }
};
</script>

<style>
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
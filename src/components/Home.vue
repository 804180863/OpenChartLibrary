<template>
  <el-container class="container">
    <el-header class="Header" style="height: 36px; background:#FFFFFF; ">
      <i class="el-icon-s-platform"></i>
      <div class="HeaderLeft">HITACHI</div>
      <div class="HeaderRight"></div>
    </el-header>
    <el-container>
      <el-aside class="Aside" style="height: 100%; width:18%; background: #F2F6FC; ">
        <DataView />
        <OptionList />
      </el-aside>
      <el-main class="Main" style="height: 100%; width:72%; background: #FFFFFF">
        <Ecahrts />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataView from "./Option/DataView";
import OptionList from "./Option/OptionList";
import Ecahrts from "./Echarts";
import page from "./page";
import { GetOneData, GetTwoDataV } from "../api/index";
export default {
  components: {
    DataView,
    OptionList,
    Ecahrts
  },
  data() {
    return {
      eg: "HomePage",
      UsePage: false
    };
  },
  //页面初始化
  mounted() {
    this.GetJsonA();
  },
  //方法
  methods: {
    async GetJsonA() {
      // const result = await GetOneData();
      console.log("HomePage");
    }
  },

  props: {
    msg: String
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  min-width: 1480px;
  min-height: 800px;
}
.container {
  width: 100%;
  height: 100%;

  background: #eee;
}
.Header {
  border-bottom: 1px solid #dcdfe6;
}
.HeaderLeft {
  float: left;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 34px;
  margin-left: 1%;
}
.el-icon-s-platform {
  float: left;
  margin-top: 0.6rem;
}
/*
.containerAM{
  width: 100%;
  background: red;
}
.Aside{
   width: 20%;
   background: blue;
}
.Main{
  width: 80%;
   background: rgb(129, 113, 113);
} */
</style>

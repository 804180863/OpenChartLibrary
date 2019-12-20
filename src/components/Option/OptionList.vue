<template>
  <div class="Option">
    <div class="OptionL">
      <div class="OptionOne" :class="{active:$route.path==='/oneList'}" @click="goOne()">
        <i class="el-icon-document"></i>
      </div>
      <div class="OptionTwo" :class="{active:$route.path==='/TwoList'}" @click="goTwo()">
        <i class="el-icon-orange"></i>
      </div>
      <div class="OptionThree" :class="{active:$route.path==='/ThreeList'}" @click="goThree()">
        <i class="el-icon-view"></i>
      </div>
      <div class="OptionFour" :class="{active:$route.path==='/FourList'}" @click="goFour()">
        <i class="el-icon-s-data"></i>
      </div>
      <div class="OptionFive" :class="{active:$route.path==='/FiveList'}" @click="goFive()">
        <i class="el-icon-set-up"></i>
      </div>
    </div>
    <div class="OptionR">
     <keep-alive> <router-view /></keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goOne() {
      this.$router.push({ path: "/oneList" });
    },
    goTwo() {
      this.$router.push({ path: "/TwoList" });
    },
    goThree() {
      this.$router.push({ path: "/ThreeList" });
    },
    goFour() {
      this.$router.push({ path: "/FourList" });
    },
    goFive() {
      this.$router.push({ path: "/FiveList" });
    
    }
  }
};
</script>

<style>
.active {
  background: rgb(249, 249, 249) !important;
}
.OptionOne {
  width: 100%;
  height: 8%;
  background: rgb(224, 224, 224);
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.OptionTwo {
  width: 100%;
  height: 8%;
  font-size: 1.6rem;
  background: rgb(224, 224, 224);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.OptionThree {
  width: 100%;
  height: 8%;
  font-size: 1.6rem;
  background: rgb(224, 224, 224);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.OptionFour {
  width: 100%;
  height: 8%;
  font-size: 1.6rem;
  background: rgb(224, 224, 224);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.OptionFive {
  width: 100%;
  height: 8%;
  font-size: 1.6rem;
  background: rgb(224, 224, 224);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.Option {
  width: 100%;
  height: 90%;
}
.OptionL {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(224, 224, 224);
}
.OptionR {
  float: left;
  width: 80%;
  height: 100%;
  background: rgb(249, 249, 249);
}
</style>
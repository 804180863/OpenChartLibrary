<template>
  <div>
        <el-divider></el-divider>
    <div class="cateList">
      <el-switch v-model="value1" active-text="是否开启流式数据"></el-switch>
    </div>
        <el-divider></el-divider>
         <div class="Ronetitle ">流数据间隔时间</div>
         
    <div class="cateList">
     
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
       options: [{
          value: '选项1',
          label: '1s'
        }, {
          value: '选项2',
          label: '4s',
          disabled: true
        }, {
          value: '选项3',
          label: '10s'
        }, {
          value: '选项4',
          label: '15s'
        }, {
          value: '选项5',
          label: '20s'
        }],
        value: ''
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
  margin-bottom: 6%;
  text-align: center;
  font-weight: 700;
}
.cateListblock {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>left
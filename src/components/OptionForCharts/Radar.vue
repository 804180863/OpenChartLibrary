<template>
  <div class="cateLine1">
    <div class="cateLine">列映射6</div>
    <div class="cateLine">
      <el-select v-model="value1" multiple collapse-tags placeholder="请选择 X 轴数据">
        <el-option
          v-for="item in LineXoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="cateLine">
      <el-select v-model="value2" multiple collapse-tags placeholder="请选择 Y 轴数据">
        <el-option
          v-for="item in LineYoptions"
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
      LineXoptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      LineYoptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: [],
      value2: []
    };
  }
};
</script>

<style>
.cateLine {
  width: 100%;
  height: 10%;
  margin-top: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cateLine1 {
  width: 100%;
  height: 50%;
}
.el-select {
  display: inline-block;
  position: relative;
}
</style>
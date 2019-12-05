<template>
  <div class="Rone">
    <div class="Ronetitle"></div>

    <div class="Ronetitle">行表名</div>
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
    <div class="smallla">
      <el-pagination small layout="prev, pager, next" :total="5000"></el-pagination>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="行数据" ></el-table-column>
      <el-table-column prop="address" label="列数据"></el-table-column>
     
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
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
.smallla {
  width: 100%;
  text-align: center;
  overflow: hidden;
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
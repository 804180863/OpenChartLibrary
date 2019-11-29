<template>
  <div class="DataView">
    <!-- 弹框从网站导入 -->
    <el-dialog title="从网站中导入" :visible.sync="centerDialogVisible" width="30%" center>
     <el-input v-model="input" placeholder="请输入网址"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="Box">
      <el-col :span="12" class="Top">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            样本数据{{TEXT}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus" @click="centerDialogVisible = true">
              <el-button type="text" @click="centerDialogVisible = true">从网站中导入</el-button>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">从网站中导入</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">测试用例</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">从电脑中导入</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">从电脑中导入</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <div class="one">
        <span class="ss">所有行</span>
        <span>2.2</span>
      </div>
      <div class="two">已过滤</div>
      <div class="three">已选</div>
    </div>
  </div>
</template>

<script>
import page from "../page";
export default {
  components: {
    page
  },
  data() {
    return {
      TEXT: "HomePage",
      UsePage: true,
      centerDialogVisible: false,
      input:'',
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    Computerimport() {
      this.$emit("UsePage", UsePage);
    }
  }
};
</script>

<style>
.DataView {
  position: relative;
  width: 100%;
  height: 10%;
  background: rgb(236, 236, 236);
}
.Box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 92%;
  height: 72%;
}
.el-dropdown {
  color: white !important;
}
.Top {
  width: 100% !important;
  height: 46%;
  background: rgb(0, 120, 212);
  text-align: center;
  cursor: pointer;
}
.one {
  float: left;
  margin-left: 1.5%;
  width: 32%;
  height: 54%;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.two {
  float: left;
  width: 32%;
  height: 54%;
  background: #ffffff;
  text-align: center;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.three {
  float: left;
  border: 1px solid #dcdfe6;
  width: 32%;
  height: 54%;
  background: #ffffff;
  text-align: center;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.one:hover {
  background: rgb(0, 120, 212);
}
.two:hover {
  background: rgb(0, 120, 212);
}
.three:hover {
  background: rgb(0, 120, 212);
}
</style>
<template>
  <div id="Echarts"></div>
</template>

<script>
import echarts from "echarts";
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      orgOptions: {}, //图标对象
      box: { model1: false },
      TypeC: "line", //图表类型
      DataX: [], //横坐标数据数组
      DataY: [], //纵坐标数据数组
      Color: " ", //图表颜色
      Size: " ", //图表圆点大小
      View: " " //视图窗口设置
    };
  },
  created() {
    //订阅关闭弹窗事件 参数event指"model-close"，没什么用
    PubSub.subscribe("model-close", (event, data) => {
      this.close(data.modal);
      this.TypeC = data.mess;
    });
    PubSub.subscribe("color1-close", (event, data) => {
      this.Color = data.mess;
      console.log(data.mess);
    });
  },
  watch: {
    Color(Color) {
      this.ChangeColor();
      this.myChart.setOption(this.orgOptions);
    },
    TypeC(TypeC) {
      this.ChangeEcharts();
      this.myChart.setOption(this.orgOptions);
    }
  },
  mounted() {
    this.Charts();
  },
  methods: {
    close(model) {
      this.box[model] = false;
    },
    ChangeColor() {
      this.orgOptions.series[0].itemStyle.color = this.Color;
    },
    ChangeEcharts() {
      if (this.TypeC === "line") {
        this.orgOptions.series[0].type = "line";
      } else if (this.TypeC === "bar") {
        this.orgOptions.series[0].type = "bar";
      } else if (this.TypeC === "radar") {
        this.orgOptions.series[0].type = "radar";
      } else if (this.TypeC === "scatter") {
        this.orgOptions.series[0].type = "scatter";
      } else if (this.TypeC === "sunburst") {
        this.orgOptions.series[0].type = "sunburst";
      } else if (this.TypeC === "pie") {
        this.orgOptions.series[0].type = "pie";
      }
    },
    Charts() {
      this.myChart = echarts.init(document.getElementById("Echarts"));
      this.orgOptions = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            itemStyle: {
            
                  color: "#409EFF"
             
            },

            type: "line"
          }
        ]
      };
      this.myChart.setOption(this.orgOptions);
    }
  }
};
</script>

<style>
#Echarts {
  width: 100%;
  height: 100%;
}
</style>
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
      Color2: " ", //图表颜色
      Color3: " ", //图表颜色
      Color4: " ", //图表颜色
      Color5: " ", //标题颜色
      Size: " ", //图表圆点大小
      View: " ", //视图窗口设置
      XTextSize: 0, //横坐标文字大小
      YTextSize: 0, //纵坐标文字大小
      TitleSize: 0, //标 题 文 字 大 小
      Xsize: 0, //X 轴 旋 转 角 度
      Ysize: 0 //Y 轴 旋 转 角 度
    };
  },
  created() {
    //订阅关闭弹窗事件 参数event指"model-close"，没什么用
    PubSub.subscribe("XTextSize-mode", (event, data) => {
      this.close(data.modal);
      this.XTextSize = data.mess;
    });
    PubSub.subscribe("YTextSize-mode", (event, data) => {
      this.close(data.modal);
      this.YTextSize = data.mess;
    });
    PubSub.subscribe("TitleSize-mode", (event, data) => {
      this.close(data.modal);
      this.TitleSize = data.mess;
    });
    PubSub.subscribe("Xsize-mode", (event, data) => {
      this.close(data.modal);
      this.Xsize = data.mess;
    });
    PubSub.subscribe("Ysize-mode", (event, data) => {
      this.close(data.modal);
      this.Ysize = data.mess;
    });
    PubSub.subscribe("model-close", (event, data) => {
      this.close(data.modal);
      this.TypeC = data.mess;
    });
    PubSub.subscribe("color1-close", (event, data) => {
      this.Color = data.mess;
    });
    PubSub.subscribe("color2-close", (event, data) => {
      this.Color2 = data.mess;
    });
    PubSub.subscribe("color3-close", (event, data) => {
      this.Color3 = data.mess;
    });
    PubSub.subscribe("color4-close", (event, data) => {
      this.Color4 = data.mess;
    });
    PubSub.subscribe("color5-close", (event, data) => {
      this.Color5 = data.mess;
    });
  },
  watch: {
    XTextSize(XTextSize) {
      this.XTextSizeA();
      this.myChart.setOption(this.orgOptions);
    },
    YTextSize(YTextSize) {
      this.YTextSizeA();
      this.myChart.setOption(this.orgOptions);
    },
    TitleSize(TitleSize) {
      this.TitleSizeA();
      this.myChart.setOption(this.orgOptions);
    },
    Xsize(Xsize) {
      this.XsizeA();
      this.myChart.setOption(this.orgOptions);
    },
    Ysize(Ysize) {
      this.YsizeA();
      this.myChart.setOption(this.orgOptions);
    },
    Color(Color) {
      this.ChangeColor();
      this.myChart.setOption(this.orgOptions);
    },
    Color2(Color2) {
      this.ChangeColor2();
      this.myChart.setOption(this.orgOptions);
    },
    Color3(Color3) {
      this.ChangeColor3();
      this.myChart.setOption(this.orgOptions);
    },
    Color4(Color4) {
      this.ChangeColor4();
      this.myChart.setOption(this.orgOptions);
    },
    Color5(Color5) {
      this.ChangeColor5();
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
    ChangeColor2() {
      this.orgOptions.xAxis.axisLine.lineStyle.color = this.Color2;
      this.orgOptions.yAxis.axisLine.lineStyle.color = this.Color2;
    },
    ChangeColor3() {
      this.orgOptions.backgroundColor = this.Color3;
    },
    ChangeColor4() {
      this.orgOptions.textStyle.color = this.Color4;
    },
    ChangeColor5() {
      this.orgOptions.title.textStyle.color = this.Color5;
    },
    ChangeEcharts() {
      if (this.TypeC === "line") {
        this.orgOptions.series[0].type = "line";
        this.orgOptions.title.text = "折线图";
      } else if (this.TypeC === "bar") {
        this.orgOptions.series[0].type = "bar";
        this.orgOptions.title.text = "柱状图";
      } else if (this.TypeC === "radar") {
        this.orgOptions.series[0].type = "radar";
        this.orgOptions.title.text = "雷达图";
      } else if (this.TypeC === "scatter") {
        this.orgOptions.series[0].type = "scatter";
        this.orgOptions.title.text = "散点图";
      } else if (this.TypeC === "sunburst") {
        this.orgOptions.series[0].type = "sunburst";
        this.orgOptions.title.text = "太阳图";
      } else if (this.TypeC === "pie") {
        this.orgOptions.series[0].type = "pie";
        this.orgOptions.title.text = "饼状图";
      }
    },
    XTextSizeA() {
      this.orgOptions.xAxis.axisLabel.textStyle.fontSize = this.XTextSize
    },
    YTextSizeA() {
      this.orgOptions.yAxis.axisLabel.textStyle.fontSize = this.YTextSize
    },
    TitleSizeA() {
      this.orgOptions.title.textStyle.fontSize = this.TitleSize;
    },
    XsizeA() {
      this.orgOptions.xAxis.axisLabel.rotate = this.Xsize;
    },
    YsizeA() {
      this.orgOptions.yAxis.axisLabel.rotate = this.Ysize;
    },
    Charts() {
      this.myChart = echarts.init(document.getElementById("Echarts"));
      this.orgOptions = {
        title: {
          show: true,
          textStyle: {
            color: "#000000", //标题颜色
            fontSize: 14
          },
          text: "折线图",
          left: "center"
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        textStyle: {
          fontSize: 15,
          color: "#000000"
        },
        backgroundColor: "#FFFFFF",
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            textStyle: {
              fontSize: 14 //更改坐标轴文字大小
            },
            rotate: 90
          },

          axisLine: {
            lineStyle: {
              color: "#000000"
              //width:8,//这里是为了突出显示加上的
            }
          }
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            fontSize: 44
          },
          axisLabel: {
             textStyle: {
              fontSize: 14 //更改坐标轴文字大小
            },
            rotate: 24
          },
          axisLine: {
            lineStyle: {
              color: "#000000"
              // width:8,//这里是为了突出显示加上的
            }
          }
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
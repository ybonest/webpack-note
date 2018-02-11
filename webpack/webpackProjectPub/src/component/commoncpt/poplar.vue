<template>
  <div class="poplar-bgcolor">
    <div class="poplar cmn-center" ref="poplar"></div>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  mounted() {
    this.drawPoplar();  //由于函数中需要操作dom元素，因此必须在dom被渲染后调用
  },
  methods: {
    drawPoplar() {
      const app = {};
      app.title = "极坐标系下的堆叠柱状图";
      console.log("dddd");
      const myChart = echarts.init(this.$refs.poplar);
      const option = {
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a"
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"]
        }
      };
      myChart.setOption(option,true);
    }
  }
};
</script>

<style lang="scss" scoped>
.poplar {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}
.poplar-bgcolor {
  background-color: white;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);
}
@media (max-width: 992px) {
  .cmn-center {
    margin: 0 auto;
  }
}
</style>


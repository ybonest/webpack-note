<template>
  <div class="ditu-bgcolor">
    <div class="ditu cmn-center" ref="boditu"></div>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
// require("echarts-gl")
// require("echarts-stat")
// require("echarts/extension")
require("echarts/map/js/china.js");
require("echarts/map/js/world.js");

export default {
  props: ["dataditu"],
  mounted() {
    // setTimeout(() => {
    //   // console.log(this.dataditu);
      // this.drawDitu();
    // }, 0);
  },
  methods: {
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.dataditu.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    randomValue() {
      return Math.round(Math.random() * 1000);
    },
    handlerData() {
      this.dataditu.seriesData.forEach(element => {
        element.value = this.randomValue();
      });
      // console.log(this.dataditu.seriesData);
      return this.dataditu.seriesData;
    },
    drawDitu() {
      const myChart = echarts.init(this.$refs.boditu);
      const option = {
        tooltip: {},
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["High", "Low"],
          seriesIndex: [1],
          inRange: {
            color: ["#e0ffff", "#006edd"]
          },
          calculable: true
        },
        geo: {
          map: "china",
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            data: this.convertData(this.dataditu.data),
            symbolSize: 20,
            symbol:
              "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",
            symbolRotate: 35,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#F06C00"
              }
            }
          },
          {
            name: "categoryA",
            type: "map",
            geoIndex: 0,
            data: this.handlerData()
          }
        ]
      };
      // console.log(option);
      myChart.setOption(option);
    }
  },
  watch: {
    dataditu: function() {
      // console.log(this.dataditu);
      this.drawDitu();
    }
  }
};
</script>

<style lang="scss" scoped>
.ditu {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}
.ditu-bgcolor{
  background-color: white;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);
}
@media (max-width: 992px) {
  .cmn-center{
    margin: 0 auto;
  }
}
</style>


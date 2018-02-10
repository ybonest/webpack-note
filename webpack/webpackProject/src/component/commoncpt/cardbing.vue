<template>
  <div class="bing-bgcolor">
    <div class="bing cmn-center" ref="bobing"></div>
    <!-- <ul>
    <li v-for="item in datalist" :key="item.name">{{item.name}}</li>
  </ul> -->
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  props: ["datalist"],
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      (function(arg) {
        // console.log(arg);
      })(this.datalist);
    }, 0);
    // this.settingPie();
  },
  methods: {
    settingPie() {
      const myChart = echarts.init(this.$refs.bobing);
      const option = {
        backgroundColor: "#2c343c",

        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: this.datalist,
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  watch: {
    /**
     * 父组件的通过ajax异步获取的data，然后传给子组件datalist，这时存在如果父组件中的异步请求还未完成，
     * 也就是说获取的值尚未映射到父组件的data上，但子组件页面已经进行了渲染，由于值未获取到，所以数据并为渲染
     * 到页面上，这种情况可以使用vue的watch监听数据变化，当数据变化时重新执行相关逻辑
     * 注意：此处算是一个坑，因为vue是数据驱动dom，也就是说你直接把传来的数据便利展示在页面上是没问题的，因为不管数据何时传来，
     * 父组件只要成功传来数据，dom中要显示的数据总会变化。但是有时我们并不是直接将传来的数据进行页面展示，而是进行二次js处理，这时候就
     * 涉及到何时进行数据处理的问题，因为是异步请求，你不能保证子组件被渲染时，数据已经传来了。
     * vue中我们处理数据的函数通常会在钩子函数created中调用，当然偶尔在mounted偶尔中也会使用（至于其他六个钩子函数很少使用，此处就不做过多介绍），
     * 但是这种情况下，无论在在那个钩子函数中操作数据，都不合适,所以通常这种情况，watch监听会是一个合适的选择，当数据变化发生变化时，处罚相应函数
     *
     * 我还曾考虑过还有一种方式，使用一个异步时间函数
     * 在本例中我曾考虑过在created或mounted中定义如下代码
     * setTimeout(() => {
     *   this.settingPie();
     * }, 0)
     * 考虑到js中代码分为同步执行和异步执行，异步代码会存放在一个异步队列中，当同步代码执行完毕后，依次执行异步队列中的函数，因此使用
     * setTimeout相当于在异步队列后面加入了新的任务，又因为异步队列是一个先进先出的数据结构，也就是说排在前面的数据优先被主线程读取并执行
     *
     * 这样似乎可行，但是结果却不尽人意，数据偶尔能成功返回，偶尔却不行。
     * 单独的时间函数既然不稳定，所以可以考虑配合递归使用，每次执行setTimeout后，查看数据是否变化，若未变化重新调用包含setTimeout的函数
     **/

    datalist() {
      if (this.datalist != undefined && this.datalist.length > 0) {
        this.settingPie();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bing {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  // box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);
}
.bing-bgcolor {
  background-color: #2c343c;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);
}
@media (max-width: 992px) {
  .cmn-center {
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="row bootply">
    <div class="col-md-6 cmn-bottom">
      <cardbing class="col-md-12" :datalist="carbingData"></cardbing>
    </div>
    <div class="col-md-6 cmn-bottom">
      <ditu class="col-md-12" :dataditu="dituData"></ditu>
    </div>
    <div class="col-md-6 cmn-bottom">
      <poplar class="col-md-12"></poplar>
    </div>
  </div>
</template>

<script>
// const echarts = require("echarts");
import cardbing from "../commoncpt/cardbing.vue"
import ditu from "../commoncpt/cardzhu.vue"
import poplar from "../commoncpt/poplar.vue"

export default {
  data() {
    return {
      carbingData: [],
      dituData: {}
    };
  },
  components: {
    cardbing,
    ditu,
    poplar
  },
  created() {
    this.getDatas();
    this.getDiDatas();
  },
  methods: {
    async getDatas() {
      const { data } = await this.$http.get("/json/bing.json");
      if (data.status === "0") {
        this.carbingData = data.message;
      }
    },
    async getDiDatas() {
      const { data } = await this.$http.get("/json/ditu.json");
      // console.log(data);
      if (data.status === 0) {
        this.dituData = data;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bootply {
  margin: 30px 15px;
  .cmn-bottom{
    padding-bottom: 30px;
  }
}
@media (max-width: 992px) {
  .cmn-center {
    margin: 0 auto;
  }
}
</style>


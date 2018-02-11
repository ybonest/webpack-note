<template>
  <div ref="fullpageBar" class="fullpage">
    <div ref="leftbar" class="left">
      <siderbar :thinflag="thinflag"></siderbar>
    </div>
    <div class="right container-fluid">
      <navbar @thinFlag="getThinFlag"></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import siderbar from "./subcomponent/slider.vue";
import navbar from "./subcomponent/navbar.vue";

export default {
  data() {
    return {
      thinflag: false
      // thinSlider: "",
      // fatSlider: "",
      // thinNav: "",
      // fatNav: ""
    };
  },
  methods: {
    getThinFlag(flag) {
      this.thinflag = flag;
    }
  },
  components: {
    siderbar,
    navbar
  },
  mounted() {},
  watch: {
    thinflag: {
      handler: function() {
        switch (this.thinflag) {
          case true:
            this.$refs.leftbar.style.width = "80px";
            this.$refs.fullpageBar.style.paddingLeft = "80px";
            break;
          case false:
            this.$refs.leftbar.style.width = "260px";
            this.$refs.fullpageBar.style.paddingLeft = "260px";
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100%;
  width: 100%;
  padding-left: 260px;
  position: relative;
  transition: all 0.4s;
  .left {
    height: 100%;
    width: 260px;
    transition: all 0.4s;
    background: linear-gradient(
      to bottom,
      #ffa534 0%,
      rgba(236, 22, 87, 0.7) 100%
    );
    position: fixed;
    z-index: 999;
    left: 0px;
    top: 0px;
  }
  .right {
    height: 100%;
    padding: 0;
  }
}

@media (max-width: 992px) {
  .fullpage {
    padding-left: 0px !important;
    .left {
      display: none;
    }
  }
  .circle {
    display: none;
  }
}
</style>


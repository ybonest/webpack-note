<template>
  <div class="panel-tenplate">
    <div class="panel-group" role="tablist">
      <div class="panel panel-default">
        <div :class="['panel-heading',thinflag?'pop-for-show':'']" ref="panelHead" role="tab" @click="flag = !flag">
          <popover class="show-pop" :routeList="routeList"></popover>
          <h4 class="panel-title">
            <a class="collapsed collapsed-ybo" role="button" data-toggle="collapse" :href="'#'+id" :aria-expanded="!flag">
              <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
              {{!thinflag?'Collapsible list group':''}}
              <span v-if="!thinflag" class="glyphicon" :class="{'glyphicon-triangle-bottom':flag,'glyphicon-triangle-top':!flag}"></span>
            </a>
          </h4>
        </div>
        <div :id="id" class="panel-collapse collapse" role="tabpanel">
          <ul class="list-group">
            <router-link class="list-group-item" :to="item.route" tag="li" v-for="item in routeList" :key="item.route">{{!thinflag?item.title:''}}</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popover from "./popover.vue";
export default {
  props: ["id", "routeList", "thinflag"],
  data() {
    return {
      flag: true
      // listData: ["Bootply", "One itmus ac facilin", "Second eros"]
    };
  },
  watch: {
    thinflag: function() {
      switch (this.thinflag) {
        case true:
          // this.$refs.panelHead.style.margin = "0 15px";
          this.$refs.panelHead.style.margin = "0";
          this.$refs.panelHead.style.padding = "0 15px";
          break;
        case false:
          this.$refs.panelHead.style.margin = "0 20px";
          break;
      }
    }
  },
  components: {
    popover
  }
};
</script>

<style lang="scss" scoped>
.pop-for-show:hover {
  .show-pop {
    display: block;
    left: 80px;
    top: 10px;
  }
}
.panel-tenplate {
  margin-top: 5px;
  .panel-group,
  .panel-default,
  .list-group-item,
  .panel-heading,
  .panel-footer {
    background-color: transparent;
    border: none;
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    .panel-title > a {
      text-decoration: none;
      font-size: 14px;
      position: relative;
      span {
        position: absolute;
        font-size: 8.4px;
        // -webkit-transform-origin-x: 0;
        -webkit-transform: scale(
          0.7
        ); //利用css3缩小属性修改chrome最小字体无法小于12px;
        top: 20px;
        right: 5px;
      }
    }
  }
  .list-group-item {
    box-sizing: border-box;
    padding: 8px;
    padding-left: 37px;
    margin: 0 20px;
    border-radius: 4px !important;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  .panel-group .panel-heading + .panel-collapse > .list-group {
    border: none;
  }
  .panel {
    box-shadow: none; // padding-bottom: 20px; // border-bottom: 1px solid #f4f4f446;
  }
  .panel-heading {
    padding: 0;
    height: 50px;
    margin: 0 20px;
    position: relative;
    h4,
    a {
      display: block;
      line-height: 50px;
      height: 100%;
      width: 100%;
    }
  }
  .collapsed-ybo {
    border-radius: 4px;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 15px;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
@media (max-width: 992px) {
  .panel-heading {
    margin: 0 10px;
  }
}
</style>


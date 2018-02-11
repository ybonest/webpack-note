<template>
  <div>
    <h4 class="title">{{!thinflag?'MY WORLD':'MW'}}</h4>
    <div :class="['avatar-container',thinflag?'avatar-for-show':'']">
      <img :class="['avatar',thinflag?changeImgSizeS:changeImgSizeB]" ref="avatar" src="../../images/fa.jpg">
      <popover class="show-avatar" :routeList="routeList"></popover>
      <div class="panel-group" role="tablist">
        <div v-if="!thinflag" class="panel panel-default">
          <div class="panel-heading" role="tab" id="collapseListGroupHeading1" @click="flag = !flag">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" href="#collapseListGroup1" :aria-expanded="flag" aria-controls="collapseListGroup1">
                Collapsible
                <span class="glyphicon" :class="{'glyphicon-triangle-bottom':flag,'glyphicon-triangle-top':!flag}" aria-hidden="true"></span>
              </a>
            </h4>
          </div>
          <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1" :aria-expanded="true" style="height: 0px;">
            <ul class="list-group">
              <li class="list-group-item" v-for="item in listData" :key="item">{{item}}</li>
              <!-- <li class="list-group-item">One itmus ac facilin</li> -->
              <!-- <li class="list-group-item">Second eros</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <collapse :id="'ybo'" :routeList="routeList" :thinflag="thinflag"></collapse>
    </div>

  </div>
</template>

<script>
import popover from "../commoncpt/popover.vue";
import collapse from "../commoncpt/collapse.vue";

export default {
  props: ["thinflag"],
  data() {
    return {
      flag: true,
      changeImgSizeS: "",
      changeImgSizeB: "",
      listData: ["Bootply", "One itmus ac facilin", "Second eros"],
      routeList: [
        { title: "Bootply", route: "/bootply" },
        { title: "One itmus ac facilin", route: "/facilin" },
        { title: "Second eros", route: "/eros" }
      ]
    };
  },
  created() {},
  methods: {
    getAvatar() {
      console.log(this.flag);
    }
  },
  watch: {
    thinflag: {
      handler: function() {
        this.changeImgSizeS = "changeImgSizeS";
        this.changeImgSizeB = "changeImgSizeB";
      }
    }
  },
  components: {
    popover,
    collapse
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: #ffffff;
  width: 80%;
  margin: 25px auto 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f4f4f446;
  overflow: hidden;
  white-space: nowrap;
}
.avatar-container {
  position: relative;
  // padding-bottom: 20px;
  border-bottom: 1px solid #f4f4f446;
  .avatar {
    display: block;
    width: 80px;
    border-radius: 50%;
    margin: 20px auto;
    border: 3px solid rgba(255, 191, 52, 0.966);
    position: relative;
  }
  .panel-group,
  .panel-default,
  .list-group-item,
  .panel-heading,
  .panel-footer {
    background-color: transparent;
    border: none;
    text-align: center;
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
        top: 13px;
        right: 45px;
      }
    }
  }
  .list-group-item {
    box-sizing: border-box;
    padding: 8px;
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
  #collapseListGroupHeading1 {
    padding: 0;
    margin: 0;
    height: 37px;
    h4,
    a {
      display: block;
      line-height: 37px;
      height: 100%;
      width: 100%;
    }
  }
}
.avatar-for-show:hover {
  .show-avatar {
    display: block;
    left: 80px;
    top: 10px;
  }
}
.changeImgSizeS {
  animation: changeImgSizeS 0.4s linear forwards;
}
.changeImgSizeB {
  animation: changeImgSizeB 0.4s linear forwards;
}
@keyframes changeImgSizeB {
  from {
    width: 50px;
  }
  to {
    width: 80px;
  }
}
@keyframes changeImgSizeS {
  from {
    width: 80px;
  }
  to {
    width: 50px;
  }
}
</style>


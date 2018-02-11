<template>
  <div>
    <h4 class="title">MY WORLD</h4>
    <div class="avatar-container">
      <img class="avatar" ref="avatar" src="../images/fa.jpg">
      <div class="panel-group" role="tablist">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="collapseListGroupHeading1" @click="flag = !flag">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" href="#collapseListGroup1" :aria-expanded="flag" aria-controls="collapseListGroup1">
                Collapsible list group
                <span class="glyphicon" :class="{'glyphicon-triangle-bottom':flag,'glyphicon-triangle-top':!flag}" aria-hidden="true"></span>
              </a>
            </h4>
          </div>
          <div id="collapseListGroup1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseListGroupHeading1" :aria-expanded="true" style="height: 0px;">
            <ul class="list-group">
              <li class="list-group-item">Bootply</li>
              <li class="list-group-item">One itmus ac facilin</li>
              <li class="list-group-item">Second eros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  created() {},
  methods: {
    getAvatar() {
      console.log(this.flag);
    }
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
}
.avatar-container {
  .avatar {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 20px auto;
    border: 3px solid rgba(255, 191, 52, 0.966);
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
    box-shadow: none;
    padding-bottom: 20px;
    border-bottom: 1px solid #f4f4f446;
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
</style>


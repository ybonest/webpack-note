<template>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li :class="['circle',anmflag?active:back]" @click="animate">
        <span></span>
        <span></span>
        <span></span>
      </li>
      <li class="">
        <!-- {{}} -->
      </li>
    </ul>
    <form class="navbar-form navbar-left">
      <div class="form-group">
        <span class="fa fa-search font-icon-self"></span>
        <input type="text" class="form-control search-input" placeholder="Search...">
      </div>
    </form>
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span class="font-icon fa fa-gavel"></span>
        </a>
        <ul class="dropdown-menu ">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span class="font-icon fa fa-bell-o"></span>
        </a>
        <ul class="dropdown-menu ">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span class="font-icon fa fa-list"></span>
        </a>
        <ul class="dropdown-menu ">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anmflag: false,
      active: "",
      back: ""
    };
  },
  methods: {
    animate() {
      this.anmflag = !this.anmflag;
      this.$emit("thinFlag", this.anmflag);
    }
  },
  watch: {
    anmflag: {
      handler: function() {
        this.active = "active-anm";
        this.back = "back-anm";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#bs-example-navbar-collapse-1 {
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  padding: 6px 20px;
  box-shadow: 0 1px 1px rgba($color: #cccccc, $alpha: 0.3);
  .circle {
    height: 38px;
    width: 38px;
    background-color: #fea139;
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 12px;
    margin-top: 5px;
    span {
      display: block;
      height: 3px;
      width: 3px;
      background-color: #ffffff;
      margin: 1px auto;
    }
  }
  .search-input {
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 15px;
    font-weight: 500px;
    color: #cccccc;
  }
}
.font-icon-self {
  font-size: 16px;
  color: #cccccc;
}
.navbar-right {
  .dropdown {
    padding: 0 6px;
  }
  .font-icon {
    font-size: 19px;
    color: #9a9a9a;
  }
  .dropdown-toggle:hover {
    background-color: transparent;
    span {
      color: #23ccef;
    }
  }
}
.active-anm span {
  animation: changepoint 0.4s forwards;
}
.back-anm span {
  animation: changepointBk 0.4s;
}
@keyframes changepoint {
  from {
    width: 2px;
  }
  to {
    width: 15px;
  }
}
@keyframes changepointBk {
  from {
    width: 15px;
  }
  to {
    width: 2px;
  }
}

@media (max-width: 992px) {
  
  .circle{
    display: none;
  }
}
</style>


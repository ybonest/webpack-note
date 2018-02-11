<template>
  <div>
    <transition name="one">
      <img v-show="flag" src="../../images/fa.jpg" alt="" class="img-circle">
    </transition>
    <br>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag:false
    }
  },
  mounted(){
    this.flag = !this.flag;
    setInterval(() => {
      this.flag = !this.flag;
    },2000)
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 140px;
  width: 140px;
  margin: 8px;
}
.one-enter{
  transform: translateX(0px);
}
.one-leave-to{
  transform: translateX(400px);
}

.one-enter-active,
.one-leave-active{
  transition: all 2s;
}
</style>


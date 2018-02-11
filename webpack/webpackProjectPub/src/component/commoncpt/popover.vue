<template>
  <div class="list-group cmn-popover" ref="popoverPosition">
    <a href="#" class="list-group-item active">
      Cras justo odio
    </a>
    <a href="#" class="list-group-item" v-for="item in routeList" :key="item.title">{{ item.title }}</a>
    <!-- <a href="#" class="list-group-item">Morbi leo risus</a> -->
    <!-- <a href="#" class="list-group-item">Porta ac consectetur ac</a> -->
    <!-- <a href="#" class="list-group-item">Vestibulum at eros</a> -->
  </div>
</template>

<script>
export default {
  props: ["routeList"],
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.cmn-popover {
  position: absolute;
  display: none;
  width: 200px;
}
</style>


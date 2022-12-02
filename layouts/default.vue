<template>
  <div class="layout">
    <b-container class="h-100">
      <nuxt />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  overflow: auto;
}
</style>

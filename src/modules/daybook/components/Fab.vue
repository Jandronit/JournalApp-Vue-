<template>
<button  class="btn btn-primary">
  <i class="fas fa-plus"></i>
</button>
</template>

<script>
export default {
  name: "Fab"
}
</script>

<style lang="scss" scoped>
button{
  border-radius: 50%;
  bottom: 2rem;
  position: fixed;
  right: 2rem;
  z-index: 99;
}
</style>

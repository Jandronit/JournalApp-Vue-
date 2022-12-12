<template>
<div class="entry-title d-flex justify-content-between p-2">

  <div>
    <span class="text-success fs-3 fw-bold">11</span>
    <span class="mx-1 fs-3">Diciembre</span>
    <span class="mx-2 fs-4 fw-light">2022</span>
  </div>

  <div>
    <button class="btn btn-danger mx-2">
      Borrar
      <i class="fas fa-trash-alt"></i>
    </button>
    <button class="btn btn-primary">
      Subir foto
      <i class="fas fa-upload"></i>
    </button>
  </div>

</div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió ahora"></textarea>
  </div>
  <Fab></Fab>

  <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="entry-picture" class="img-thumbnail">
</template>

<script>
import {defineAsyncComponent} from 'vue';

export default {
  name: "EntryView",
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  }
}
</script>

<style lang="scss" scoped>

textarea{
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus{
    outline: none;
  }
}

img{
  width: 12.5rem;
  position: fixed;
  bottom: 9.375rem;
  right: 1.25rem;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);}
</style>

<template>
<div class="entry-container mb-3 pointer p-2"
     @click="$router.push({ name: 'entry', params: { id: entry.id }})">

<!--  Tittle-->
  <div class="entry-title d-flex">
    <span class="text-success fs-5 fw-bold">{{ day }}</span>
    <span class="mx-1 fs-5">{{ month }}</span>
    <span class="mx-2 fw-light">{{ yearDay }}</span>
  </div>
<!--  Content-->
  <div class="entry-description">
    {{ shortText }}
  </div>
</div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
export default {
  name: 'Entry',
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  computed: {
   shortText(){
     return (this.entry.text.length > 130) ? this.entry.text.substr(0, 130) + '...' : this.entry.text;
   },
    day(){
      return new Date(this.entry.date).getDate();
    },
    month(){
      return months[new Date(this.entry.date).getMonth()];
    },
    yearDay(){
      return `${new Date(this.entry.date).getFullYear()}, ${days[new Date(this.entry.date).getDay()]}`;
    },
  }
}
</script>

<style lang="scss" scoped>

.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.3s all ease-in;

  &:hover{
    background-color: lighten($color: #2c3e50, $amount: 45%);
    transition: 0.3s all ease-in;
  }
}

.entry-description{
  font-size: 0.75rem;
}
</style>

<template>
<div class="entry-container mb-3 pointer p-2"
     @click="$router.push({ name: 'entry', params: { id: 10 }})">
>
<!--  Tittle-->
  <div class="entry-title d-flex">
    <span class="text-success fs-5 fw-bold">4</span>
    <span class="mx-1 fs-5">Diciembre</span>
    <span class="mx-2 fw-light">2022, Domingo</span>
  </div>
<!--  Content-->
  <div class="entry-description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci, alias, amet animi asperiores atque autem beatae consectetur consequatur corporis cumque debitis dignissimos doloremque dolorum ea eius enim eos esse est et eum ex expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa ipsam ipsum iste iure iusto laboriosam laborum laudantium libero magnam magni maiores maxime minima
  </div>
</div>
</template>

<script>
export default {
  name: 'Entry',
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

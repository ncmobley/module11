<template>

<TheNavigation/>

<GoBack/>

  <div class="container">
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in">

        <component :is="Component"></component>

      </Transition>
    </router-view>

  </div>


</template>

<script>

import GoBack from './components/GoBack.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {TheNavigation, GoBack}
}

</script>


<style> 

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.fade-enter-active, 

.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, 

.fade-leave-to {
  opacity: 0;
}
</style>
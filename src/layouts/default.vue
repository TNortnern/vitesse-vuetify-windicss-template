<template>
  <router-view v-slot="{ Component, route }">
    <transition name="page-fade">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition-duration: 0.35s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
.page-fade-enter-from,
.page-fade-leave-active {
  opacity: 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.remove-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.remove-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

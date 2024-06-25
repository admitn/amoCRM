<template>
  <a-layout class="layout">
      <a-layout-content class="layout__content">
          <TableLeads />
      </a-layout-content>
  </a-layout>
</template>
<script setup lang="ts">
  import TableLeads from './components/tableLeads.vue';
</script>
<style>
#app {
    height: 100%;
}

.layout {
    height: 100%;
}
.layout__content {
    padding: 50px;
    height: 100%;
    margin: 0 auto;
}
p {
    margin: 0;
}
</style>
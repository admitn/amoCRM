<template>
  <a-layout class="layout">
      <a-layout-content class="layout__content">
          <TableLeads />
      </a-layout-content>
  </a-layout>
</template>
<script setup lang="ts">
  import TableLeads from './components/tableLeads.vue';
/*
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
// components
import SearchBar from '@/components/ui/SearchBar.vue';
// hooks
import useSearch from './components/hooks/useSearch';

const store = useStore();

const errorMessage = ref(false);


const { searchTerm, updateSearch } = useSearch(fetchLeads);
const isLoading = ref(false);
async function fetchLeads(): Promise<void> {
    isLoading.value = true;
    try {
        await store.dispatch('getLeads', { searchQuery: searchTerm.value });
    } catch (_) {
        errorMessage.value = true;
    }
    isLoading.value = false;
}
fetchLeads();

const dataSource = computed(() => store.getters.leads);
console.log(dataSource)
*/
/*
import { computed } from 'vue';
import { useStore } from 'vuex';
//import SearchBar from '@/components/ui/SearchBar.vue';
//import { Options, Vue } from 'vue-class-component';

const store = useStore();

const columns = [
    { title: '#', key: 'index'},
    { title: 'Название', dataIndex: 'name', key: 'name' ,render: (name) => (name) },
    { title: 'Бюджет (руб)', dataIndex: 'price', key: 'price' },
    { title: 'Статус', key: 'status' },
    { title: 'Ответственный', key: 'responsible_user' },
    { title: 'Дата создания', dataIndex: 'created_at', key: 'created_at' }
];
//let dataSources = [{"name":"das"}]

const dataSource = computed(() => store.getters.leads);
console.log(dataSource)
const search = function (event: Event): void {
    console.log(event);
};
*/
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
    width: 1500px;
    margin: 0 auto;
}

p {
    margin: 0;
}
</style>
<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  */
</style>
   <!--
  <a-card title="Список всех сделок" :bordered="false">
    SearchBar 
    <template #extra>
      <SearchBar :isLoading="isLoading" :searchedTerm="searchTerm" @search="updateSearch" />

      <a-col>
            <a-input-search
                placeholder="Поиск сделок"
                :loading="isLoading"
                :visibilityToggle="false"
                style="width: 300px"
                :value="searchedTerm"
                @change="search"
                allow-clear
            />
        </a-col>

    </template>

    <a-table :dataSource="dataSource" rowKey="id" :columns="columns" :pagination="false" bordered:loading="isLoading" :scroll="{ x: true }">

    </a-table>

  </a-card>
    -->
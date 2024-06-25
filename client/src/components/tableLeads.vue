<template>
    <a-card title="Список всех сделок" :bordered="false">
        <template #extra>
            <SearchBar :isLoading="isLoading" :searchedTerm="searchTerm" @search="updateSearch" />
        </template>
        <a-table :dataSource="dataSource" rowKey="id" :columns="columns"
            :pagination="false" bordered :loading="isLoading" 
            :scroll="{ x: true }">

            <template #emptyText>
                <a-empty>
                    <template #description>
                        <p>Ни одной сделки не найдено</p>
                    </template>
                </a-empty>
            </template>
            <template #bodyCell="{ column, record}">
                <template v-if="column.key === 'price'">
                    <p>{{ record.price }} ₽</p>
                </template>
                <template v-if="column.key === 'status'">
                    <a-tag :color="record.status.color" style="color: rgba(0, 0, 0, 0.65)">{{
                        record.status.name
                    }}</a-tag>
                </template>
                <template v-if="column.key === 'responsible_user'">
                    <a-row align="middle" :gutter="8">
                        <a-col>
                            <a-avatar size="small" style="background-color: #87d068">
                                <template #icon><UserOutlined /></template>
                            </a-avatar>
                        </a-col>
                        <a-col>{{ record.responsible_user.name }}</a-col>
                    </a-row>
                </template>
                <template v-if="column.key === 'created_at'">
                    <p>{{ moment(record.created_at).format('D MMMM YYYY') }}</p>
                </template>
            </template>
            <template #expandedRowRender="{ record }">
                <a-row align="middle" :gutter="8" v-for="contacts in record.contacts" :key="contacts.id">
                    <a-col>
                        <a-avatar size="small">
                            <template #icon><UserOutlined /></template>
                        </a-avatar>
                    </a-col>
                    <a-col>{{ contacts.name }}</a-col>
                    <a-col >
                        <a :href='"tel:"+contacts.phone'><PhoneTwoTone /></a>
                    </a-col>
                    <a-col v-if = "contacts.email" >
                        <a :href='"mailto:"+contacts.email'><MailOutlined /></a>
                    </a-col>
                </a-row>
            </template>
        </a-table>
    </a-card> 
</template>


<script setup lang="ts">
    import { UserOutlined, PhoneTwoTone, MailOutlined } from '@ant-design/icons-vue';
    import SearchBar from './ui/searchBar.vue';
    import { ref, computed } from 'vue';
    import userSearch from './userSearch';
    import { useStore } from 'vuex';
    import moment from 'moment';

    moment.locale('ru');

    const store = useStore();

    const isLoading = ref(false);

    const { searchTerm, updateSearch } = userSearch(fetchLeads);

    async function fetchLeads(): Promise<void> {
        isLoading.value = true;
        try{
            await store.dispatch('getLeads', { searchQuery: searchTerm.value});
        }
         catch (_) {
            console.log("ошибка")
        }
        isLoading.value = false;
    }
    fetchLeads();

    const dataSource = computed(() => store.getters.leads);
    const columns = [
        { title: 'Название', dataIndex: 'name', key: 'name' },
        { title: 'Бюджет (руб)', dataIndex: 'price', key: 'price' },
        { title: 'Статус', key: 'status' },
        { title: 'Ответственный', key: 'responsible_user' },
        { title: 'Дата создания', dataIndex: 'created_at', key: 'created_at' }
    ];
</script>
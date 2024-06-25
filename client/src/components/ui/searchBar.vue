<template>
    <a-row align="middle" :gutter="10">
        <!-- Сообщение о минимальном числе символов для поиска -->
        <a-col>
            <div v-if="!isInputValid">
                <a-tooltip title="Поиск работает от 3 символов">
                    <warning-outlined :style="{ fontSize: '1rem', color: '#fa8c16' }" />
                </a-tooltip>
            </div>
        </a-col>

        <!-- Search bar -->
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
    </a-row>
</template>
<script setup lang="ts">
    import { WarningOutlined } from '@ant-design/icons-vue';
    import { defineEmits, computed, defineProps } from 'vue';

    const props = defineProps<{
        isLoading: boolean;
        searchedTerm: string;
    }>();

    const emit = defineEmits<{
        (event: 'search', newTerm: string): void;
    }>();

    const isInputValid = computed(() => !props.searchedTerm?.length || props.searchedTerm?.length > 2);

    const search = function (event: Event): void {
        const newTerm: string = (event.target as HTMLInputElement).value;
        emit('search', newTerm);
    };
</script>
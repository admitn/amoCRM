import { ref, computed, watch } from 'vue';

export default function userSearch(callback: () => void) {
    const searchTerm = ref('');

    // запросы меньше 3 символов не работают в amoCRM
    const isTermValid = computed(() => !searchTerm.value.length || searchTerm.value.length > 2);
    const updateSearch = (newQuery: string) => (searchTerm.value = newQuery);

    // задержка поиска, чтобы не делать лишних запросов, а подождать 0.3с после ввода
    watch(searchTerm, newValue =>
        setTimeout(() => {
            if (newValue === searchTerm.value && isTermValid.value) callback();
        }, 300)
    );

    return {
        searchTerm,
        updateSearch
    };
}
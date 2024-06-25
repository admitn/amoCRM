import { ref, computed, watch } from 'vue';

export default function userSearch(callback: () => void) {
    const searchTerm = ref('');

    const isTermValid = computed(() => !searchTerm.value.length || searchTerm.value.length > 2);
    const updateSearch = (newQuery: string) => (searchTerm.value = newQuery);

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
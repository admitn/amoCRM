import { createStore } from 'vuex';

export default createStore({
    state: {
        leads: []        
    },
    getters: {
        leads(state) {
            return state.leads;
        }
    },
    mutations: {
        setLeads(state, payload) {
            state.leads = payload;
        }
    },
    actions: {
        async getLeads(context, payload) {
            let data;
            const baseUrl = process.env.VUE_APP_BASE_URL
            const res = await fetch(`${baseUrl}/leads?query=${payload.searchQuery}`);
            if (res.ok){
                const w = await res.json();
                data = w;
                context.commit('setLeads', data);
            }
        }
    }
})
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// interface RootState {
//     staff: StaffState
//     app: AppState
// }

const store = new Vuex.Store({
    strict: true,
    modules: {
        // app,
        // staff
    },
    state: {

    },
    getters: {

    },
    actions: {
        
    }
})

export default store
import { createStore } from "vuex";
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
const store = createStore({
    state: {
        points: 0,
        user: null
    },
    mutations: {
        updatePoints(state, payload) {
            state.points = state.points + payload;
        },
        setUser(state, payload) {
            state.user = payload;
            console.log("user state change", state.user);
        }
    },
    actions: {
        async signup(context, { email, password }) {

            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                context.commit('setUser', response.user);
            }else{
                throw new Error('something went wrong please try again');
            }
        }
    }
});

export default store;
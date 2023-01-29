import { User } from '@/models/user';
import { createStore } from 'vuex'
import productsModule from './products'
import userModule from './user';

export interface IState {
  authUser: User | null;

}

export default createStore<IState>({
  state: {
    authUser: null,
  },
  getters: {
    userProfile(state) {
      return state.authUser
    }
  },
  mutations: {
    logIn(state, user: User) {
      state.authUser = user;
    }
  },
  actions: {
  },
  modules: {
    products: productsModule,
    user: userModule,
  }
})

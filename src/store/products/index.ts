import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IProductsState } from "./state";


const productsModule: Module<IProductsState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default productsModule;
import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IUserState } from "./state";

const userModule: Module<IUserState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default userModule;
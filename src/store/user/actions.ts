import fakeShopApi from "@/api/fakeShopApi";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async fetchUser({commit}) {
        commit('setIsLoading', true)

        const {data} = await fakeShopApi.get<unknown, AxiosResponse<User>>('/auth/profile')

        commit('setIsLoading', false)
        commit('setUser', data)
    }
}

export default actions;
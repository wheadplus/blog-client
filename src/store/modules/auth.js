import auth from '@/api/auth'

const state = {
    user: null,
    isLogin: false
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    //mutation 修改
    setUser(state,payload) {
        //payload 指传入的额外的参数
        state.user = payload.user
    },
     
    setLogin(state,payload) {
        state.isLogin = payload.isLogin
    }
}
const actions = {
    //actions 异步操作 操控mutation去修改state
    // commit是什么 console。log看看， async await 语法不懂 看阮一峰
    login({ commit }, { username, password }){
        return  auth.login({ username, password }).then(res=>{
                //commit（“mutation方法”，“提交额外参数”）
                commit('setUser', { user : res.data })
                commit('setLogin', { isLogin: true })
                })
    },
    async register({ commit },{ username, password }){
        let res = await auth.register({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin : true })
        return res 
    },

    async logout({ commit }){
        await auth.logout()
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
    },

    async checkLogin( { commit, state }){ 
        if(state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin',{ isLogin: res.isLogin })
        if(!state.isLogin) return false
        commit('setUser', { user: res.data })
        return true
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}
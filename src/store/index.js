import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, corpo:"Ir ao mercado", concluido:false},
      {id:2, corpo:"Ir ao mercado", concluido:false},
      {id:3, corpo:"Ir ao mercado", concluido:false}
    ]
  },
  getters: {
  },
  mutations: {
    adicionarTarefa(state, corpo){
      if(corpo){
        state.tarefas.push({
          id: new Date().getTime(),
          corpo,
          concluido:false
        })
        this.campoInput = null
      }
    },
    removeTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})

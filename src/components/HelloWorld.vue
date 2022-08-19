<template>
    <div>
         <v-list-item 
         >
          <template v-slot:default="{}">
                <v-list-item-action>
                  <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{tarefa.corpo}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
            <TarefaMenu/>
            </v-list-item-action>
          </template>
        </v-list-item> 
        <v-divider></v-divider>     
    </div>
</template>

<script>

import TarefaMenu from './TarefaMenu.vue';

  export default {
    components:{ TarefaMenu },
    props:["tarefa"],
    methods:{
      removerTarefa(id){
        this.$store.commit('removeTarefa', id)
      }
    }
  }
</script>

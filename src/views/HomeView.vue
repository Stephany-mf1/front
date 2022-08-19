<template>
  <div>
  <v-col
          cols="12"
          sm="6"
          md="12"
        >
          <v-text-field
            v-model="campoInput"
            label="Informe sua tarefa"
            placeholder="Placeholder"
            outlined
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
   <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >
        <div v-for="tarefa, index in $store.state.tarefas"
        :key="index">   
          <hello-world 
          :tarefa="tarefa"
          />
        </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {


    components: {
      HelloWorld,
    },
    data(){
      return{
        campoInput: null,
      }
    },
    methods:{
      handleAddTarefa(){
        this.$store.commit('adicionarTarefa', this.campoInput)
        this.campoInput = null;
      }
    }
  }
</script>

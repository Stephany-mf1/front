<template>
    <div>
        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            >
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                v-on:click="clicar()"
                >
                  <v-icon left>{{ item.icone }}</v-icon>

                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <modalEditar
        v-if="items[0].modal"
        />
    </div>
</template>

<script>
import modalEditar from './modalEditar.vue'
  export default {
  components: { modalEditar },
    data: () => ({
      items: [
        { 
            icone:"mdi-pencil",
            title: 'Editar',
        },
        { 
            icone:"mdi-trash-can",
            title: 'Excluir',        
        },
      ],
    }),
        methods: {
        clicar (editar) {
         if (editar) {
            console.log("Editar")
         }
        else{
            console.log("excluir")
        }
        },
}
}
</script>
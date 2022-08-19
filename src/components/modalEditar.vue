<template>
    <div>
     <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card class="px-3">
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>Informe o novo texto</v-card-text>
          <v-text-field
            class="px-3"
            label="Texto"
            outlined
          ></v-text-field>
        <v-card-actions> 
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>


<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>
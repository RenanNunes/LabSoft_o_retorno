<template>
  <div>
    <b-table :fields="fields" :items="items" hover :currentPage="currentPage" :per-page="perPage">
      <template #cell(estoque)="row">
        {{row.item.qtd > 0 ? 'Sim' : 'Não'}}
      </template>
      <template #cell(detalhes)="row">
        <a :href="`/produtos/detalhar/${row.item.idProduto}`">
          Detalhes
        </a>
      </template>
    </b-table>
    <b-pagination size="md" align="center" v-model="currentPage" :total-rows="items.length" currentPage="currentPage" :per-page="perPage" />
  </div>
</template>

<script>
export default {
  data () {
    let config = {
      currentPage: 1,
      perPage: 20,
      fields: [
        {
          key: 'nome',
          label: 'Produto',
          sortable: true,
        },{
          key: 'preco',
          label: 'Preço',
          sortable: true,
          formatter: (value) => {
            if (value){
              return 'R$'+Number(value).toFixed(2);
            } else {
              return '-';
            }
          },
        },{
          key: 'qtd',
          label: 'Quantidade',
          sortable: true,
        },{
          key: 'perecivel',
          label: 'Perecível',
          sortable: true,
          formatter: (value) => {
            return value ? 'Sim' : 'Não'
          },
        },{
          key: 'detalhes',
          label: 'Ver mais',
        }
      ],
    }
    if (this.estoque == false) {
      config.fields.splice(4, 0, { key: 'estoque', label: 'Em estoque', })
    }
    return config
  },
  props: {
      items: {
        type: Array,
        required: true,
      },
      estoque: {
        type: Boolean,
        required: true,
      }
  },
}
</script>

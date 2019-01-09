import Api from '../services/Api'

export default {
  fetchRestos () {
    return Api().get('restos')
  },
  addResto (params) {
    return Api().post('restos', params)
  },

  updateResto (params) {
    return Api().put('restos/' + params.id, params)
  },

  getResto (params) {
    return Api().get('restos/' + params.id)
},
  deleteResto (id) {
    return Api().delete('restos/' + id)
  }
}
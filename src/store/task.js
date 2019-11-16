export default {
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'GrowthBusters: Hooked on Growth',
        'description': 'I directed this documentary challenging the myths linking growth with prosperity and fulfillment. The film explores how our attitudes toward economics, consumption',
        'whatWatch': 'film',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Game of thrones',
        'description': 'Best serials',
        'whatWatch': 'Serial',
        'completed': false,
        'editing': false
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    tasks (state) {
      return state.tasks
    }
  }
}

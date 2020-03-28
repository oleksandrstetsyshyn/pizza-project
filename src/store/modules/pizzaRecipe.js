export default {
    namespaced: true,
    state: {
        pizzaRecipe: [
            {
                id: 'constructor',
                name: "Цей список зі стора",
                price: 50,
                amount: 300,
                ingredients: []
            }, {
                id: 'milano',
                name: "Міланська",
                price: 124,
                amount: 600,
                ingredients: ['creamSauce', 'mozarella', 'salami', 'bacon', 'oregano']
            },
            {
                id: "country",
                name: "Селянська",
                amount: 600,
                price: 130,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'italy',
                name: "Італія",
                price: 153,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            },
            {
                id: 'exotic',
                name: "Екзотична",
                price: 103,
                ingredients: ['creamSauce', 'pineapple', 'mozarella', 'ham', 'salami', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'pollo',
                name: "Поло",
                price: 100,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            },
            {
                id: 'capri',
                name: "Капрі",
                price: 120,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'salami', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'hawaii',
                name: "Гавайська",
                price: 140,
                ingredients: ['creamSauce', 'pineapple', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            },
            {
                id: 'margherita',
                name: "Маргарита",
                price: 140,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'pepperoni ',
                name: "Пепероні",
                price: 123,
                ingredients: ['creamSauce', 'pineapple', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            },
            {
                id: 'prosciutto',
                name: "Прошутто",
                price: 123,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'quattroFormaggio',
                name: "Чотири сири",
                price: 123,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            },
            {
                id: 'quattroStagioni',
                name: "Чотири сезона",
                price: 123,
                ingredients: ['creamSauce', 'pineapple', 'mozarella', 'ham', 'feta', 'bacon', 'oregano']

            },
            {
                id: 'vitello',
                name: "Віталік",
                price: 123,
                ingredients: ['creamSauce', 'mozarella', 'ham', 'salami', 'bacon', 'oregano']

            }
        ],
        filteredPizzaRecipe:[]
    },

    getters: {
        getPizzaList(state) {
            return state.pizzaRecipe
        }
    },

    mutations: {
        pushIdToPizzaRecipe(state, productId) {
            state.pizzaRecipe.push(productId)
        }
    },

    actions: {
        addProductToPizzaRecipe({ commit }, productId) {
            commit('pushIdTopizzaRecipe', productId)
        },
    }

}
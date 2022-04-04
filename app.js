/**
 * Vue.js Basics
 *
 */


// skapar en Vue app
const app = Vue.createApp({
	data() {//kör "data" som är en funktion. den returnerar ett objekt med count 0
		return {
            message: "Vue To do-app",
			newTodoTitleInput: "",
			todos: [
/*				{ title: "Make coffee", completed: true },
				{ title: "Drink coffee", completed: false },
				{ title: "Drink MOAR coffee", completed: false },
				{ title: "Drink ALL THE coffee", completed: false },
                */
			],
		}
	},

	methods: {
		createNewTodo() {
			// create new todo and push it to the list of todos. //pushar in i listan över todos när vi skriver in den
			this.todos.push({
				title: this.newTodoTitleInput,
				completed: false
			})

			// clear new todo title input. //tömmer listan när vi vill ta bort en avklarad todo
			this.newTodoTitleInput = ""
		},

		deleteTodo(todo) {
			this.todos = this.todos.filter(t => t !== item)
		},

		toggleTodo(item) { //skiftar copmpleted
            /* const unfinishedTodos = this.todos.filter(todo => {
                 this.unfinishedTodosCount = unfinishedTodos.length
             })*/
			item.completed = !item.completed
		}
	},

    //beräknar vilket värde den ska ha
	computed: {
		finishedTodos() {
			return this.todos.filter(item => item.completed)
		},

        //en metod för att kolla om Input-fältet är ifylld med mer än 3 tecken. Vi vill att det inte ska gå att klicka på den om du inte fyllt i något i fältet
        //ska bara returnera true eller false
		newTodoIsValid() {
			return this.newTodoTitleInput.length >= 3
		},

		unfinishedTodos() {
			return this.todos.filter(item => !item.completed)
		},

		unfinishedTodosCount() {
			return this.todos.reduce((previousValue, item) => {
				if (item.completed) {
					return previousValue
				}

				return previousValue + 1
			}, 0)
		}
	}
})

// Mount our Vue app on the element with id `app` in the DOM
//Mount/montera vår vue app in i HTML-elementet till DOM med id app. (alltså den diven i index.html som heter app)
app.mount('#app')




        
        /*
        computed: { // beräkningar med FILTER

            unfinishedTodosCount() {
                const unfinishedTodos = this.todos.filter(todo => {
                    this.unfinishedTodosCount = unfinishedTodos.length
                }
            }
        }
    });

    */
        /*computed: { // beräkningar med REDUCE
            //returnerar det föreegående värdet om todon är avklarad, annars returnerar vi det förra värdet + 1.
            unfinishedTodosCount() {
                return this.todos.reduce ((previousValue, item) => {

                }
    });*/



//NOTES: använd ALDRIG DELETE för att ta bort npt från en array, då blir det ett hål i listan och ingen fyller den platsen
//använd ist SPLICE
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList :items="sortedItem" @onItemDone="done" />
    <InputForm @onSave="save" />
  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import InputForm from "@/components/InputForm";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    TodoList,
    InputForm,
  },
  mounted() {
    let todoItems = localStorage.getItem("todoItems");
    if (!todoItems) {
      todoItems = JSON.stringify([]);
    }
    try {
      const parsedItems = JSON.parse(todoItems);
      if (Array.isArray(parsedItems)) {
        this.initItem(parsedItems);
      } else {
        console.error("Parsed items are not an array:", parsedItems);
      }
    } catch (e) {
      console.error("Error parsing JSON from localStorage:", e);
    }
  },
  computed: {
    ...mapState(["items"]),

    sortedItem() {
      console.log("Items:", this.items);
      return this.items.sort((a, b) => {
        return b.time - a.time;
      });
    },
  },
  methods: {
    ...mapMutations(['addItem', 'initItem', 'removeItem']),
  
  done(id) {
    this.removeItem(id);
    const updatedItems = this.items.filter(item => item.time !== id);
    localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    this.initItem(updatedItems);
  },
   save(text) {
    this.addItem({
      text: text,
      time: Date.now(),
      completed: false,
    });
    localStorage.setItem('todoItems', JSON.stringify(this.items));
  }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
    <ul>
      <li v-for="item in items" :key="item.time">
        <button @click="itemDone(item.time)">Done</button>

        {{item.text | capitalize}}
      </li>
    </ul>
</template>

<script>
export default {
   name : 'TodoList',
   props : {
    items: {
      type: Array
    }
   },
   filters:{
    capitalize (val) {
      return val.toUpperCase()
    }
  },
   methods: {
    itemDone(id){
      this.$emit('onItemDone' , id)
    }
   },
}
</script>



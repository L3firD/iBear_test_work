<template>
    <div id="slide_two">
        <div class="topContent-2">
            <input type="text" v-model="title" name="edit_box" placeholder="Title">
            <button v-on:click="created()">+</button>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        created() {
            this.$store.commit('loadTitle', this.title)
        }
    }
}
</script> 

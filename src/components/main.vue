<template>
    <div class="general-1">
        <div class="menu">
            <router-link id="dash" class="slide" to="/">Dashboard</router-link>
            <br/>
            <router-link id="tran" class="slide" to='/transact'>Transactions</router-link>
        </div>
        <router-view/>

        <div class="content">
            <div class="transact">
                <h2>Transactions</h2>
                <hr align="center" width="420" size="1" color="#000000" />
                <div v-for="(title, i) in listTitle" v-bind:key="i" class="list_line">
                    <h5 >{{title}}</h5>
                    <hr align="left" width="360" size="1" color="#000000" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main.vue',
    computed: {
        listTitle(){
            return this.$store.state.titleTable
        },
    }
}
</script>
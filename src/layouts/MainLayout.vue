<template>
   <div>
       <Loader v-if="loading" />
        <div class="app-main-layout" v-else>

        <Navbar @click="isOpen = !isOpen" />

        <Sidebar v-model="isOpen"/>

        <main class="app-content" :class="{full: !isOpen}">
          <div class="app-page">
            <router-view />
          </div>
        </main>

        <div class="fixed-action-btn">
          <router-link class="btn-floating btn-large blue" to="/record">
            <i class="large material-icons">add</i>
          </router-link>
        </div>
        </div>
    </div>  
</template>


<script>
import Navbar from '@/components/App/Navbar'
import Sidebar from '@/components/App/Sidebar'

export default{
    name: 'main-layout',
    components: {
        Navbar,Sidebar
    },
    async mounted(){
        if(!Object.keys(this.$store.getters.info).lenght) {
           await this.$store.dispatch('fetchInfo')
           }
        
        this.loading = false
    },
    data: () =>({
        isOpen: true,
        loading: true
    }),
}
</script>























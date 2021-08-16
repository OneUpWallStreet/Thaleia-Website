<template>
  <div class="h-screen overscroll-contain">

         <div class="flex flex-col justify-between">
            <nav-bar class="w-full fixed inset-x-0 top-0 z-50"></nav-bar>
            <router-view class="relative py-12 flex-grow"></router-view>
            <div class="w-full">
              <Footer class="static bottom-0 bg-gray-100"></Footer>
            </div>
            
         </div>

    </div>



</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,

  }
}
</script>
    Footerript>

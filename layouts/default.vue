<template>
  <div>
    <layout-navbar />
    <div class="page-container">
      <nuxt />
    </div>
    <div class="page-container">
      <layout-footer />
    </div>
  </div>
</template>
<script>
import LayoutFooter from '~/components/footer.vue';
import LayoutNavbar from '~/components/navbar.vue';
export default {
 components: { LayoutFooter, LayoutNavbar} 
}
</script>

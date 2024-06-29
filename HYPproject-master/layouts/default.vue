  <template>
  <div>
      <Navbar/>
      <Nuxt/>
      <FooterNew/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import FooterNew from '~/components/FooterNew.vue';
export default {
    components: { Navbar, FooterNew }
}
</script>

<style>

</style>
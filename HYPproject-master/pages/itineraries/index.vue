<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_itineraries.webp"
      alt="Bologna di notte"
    />
    <Breadcrumbs />
    <LargeCardHome
      :title="`Scopri gli itinerari più interessanti.`"
      :snippet="`Bologna è una città ricca di monumenti storici e moderni. Ti proponiamo una serie di itinerari da percorrere per goderti al meglio la cittadina e scoprire nuovi sentieri che mescolano la storia di questo comune con la natura dei colli circostanti.`"
      :img="`/icon/itineraries_icon.png`"
      :altimg="`Localization icon`"
    />
    <div class="grid-layout">
      <TileNew
        v-for="itinerary of itineraryList"
        :key="itinerary.itineraryId"
        :img="itinerary.itineraryImage"
        :title="itinerary.itineraryName"
        :snippet="itinerary.itineraryDescription.substring(0, itinerary.itineraryDescription.indexOf('.') + 1)"
        :buttonsnippet="`Scopri di più`"
        :link="`/itineraries/${itinerary.itineraryId}`"
      />
    </div>
  </div>
</template>

<script>
import LargeCardHome from '~/components/LargeCardHome.vue'
import TileNew from '~/components/TileNew.vue'
export default {
  components: { LargeCardHome, TileNew },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraryList')
    return {
      itineraryList: data,
    }
  },
  data() {
    return {
      itineraryList: [],
    }
  },
  head() {
    return {
      title: 'Itinerari - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Lista degli itinerari più importanti che ti permetteranno di scoprire la Città di Bologna.`,
        },
        { 
          name: 'keywords',
          content: 'Bologna, Italia, Itinerari Bologna, Passeggiata Bologna, Giro in bici Bologna, Camminata Bologna'
        }
      ],
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
}
@media (min-width: 10em) {
  .grid-layout {
    display: grid;
    gap: 2em;
    padding-block: 2rem;
    width: 80%;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
}
@media (min-width: 75em) {
  .grid-layout {
    display: grid;
    gap: 2em;
    padding-block: 2rem;
    width: 75%;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
}
</style>

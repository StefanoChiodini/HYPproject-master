<template>
  <div>
    <img
      class="img"
      src="~/assets/images/bologna_explore.jpg"
      alt="Bologna dall'alto"
    />
    <Breadcrumbs />
    <LargeCardHome
      :title="`Scopri la città di Bologna.`"
      :snippet="`Bologna è il vivace e antico capoluogo dell'Emilia-Romagna, nel Nord Italia. La sua Piazza Maggiore è un'ampia piazza circondata da portici, locali e strutture medievali e rinascimentali come Palazzo d'Accursio, la Fontana del Nettuno e la Basilica di San Petronio. Tra le torri medievali della città spiccano le due pendenti degli Asinelli e quella della Garisenda.`"
      :img="`/icon/explore_icon.png`"
      :altimg="`Compass icon`"
    />
    <div class="grid-layout">
      <TileNew
        v-for="poi of pointOfInterestList"
        :id="poi.pointOfInterestId"
        :key="poi.pointOfInterestId"
        :img="poi.pointOfInterestImage"
        :title="poi.pointOfInterestName"
        :snippet="
          poi.pointOfInterestDescription
            .substring(0, 300)
            .substr(
              0,
              Math.min(
                poi.pointOfInterestDescription.substring(0, 300).length,
                poi.pointOfInterestDescription
                  .substring(0, 300)
                  .lastIndexOf(` `)
              )
            ) + ` [...]`
        "
        :address="poi.pointOfInterestAddress"
        :time="poi.pointOfInterestTime"
        :buttonsnippet="`Scopri di più`"
        :link="`/explore/${poi.pointOfInterestId}`"
        :clickable="false"
      />
    </div>
  </div>
</template>

<script>
import LargeCardHome from '~/components/LargeCardHome.vue'
import TileNew from '~/components/TileNew.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: { LargeCardHome, TileNew, Breadcrumbs },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/poiList')
    return {
      pointOfInterestList: data,
    }
  },
  data() {
    return {
      pointOfInterestList: [],
    }
  },
  head() {
    return {
      title: 'Scopri la città - Comune di Bologna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Lista dei punti di interesse più conosciuti e suggestivi che il Comune di Bologna ha da offrirti.`,
        },
        { 
          name: 'keywords',
          content: 'Bologna, Italia, Monumenti Bologna, Punti interesse Bologna'
        }
      ],
    }
  },
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

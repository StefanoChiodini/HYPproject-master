<template>
  <div class="skeleton_container">
    <SkeletonItineraries
      :title="itineraryName"
      :description="itineraryDescription"
      :text="itineraryPath"
      :img="itineraryMap"
      :texttitle="`Il percorso`"
      :time="itineraryTime"
      :list="myList"
    />
  </div>
</template>

<script>
import SkeletonItineraries from '~/components/SkeletonItineraries.vue'
export default {
  components: { SkeletonItineraries },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const [itineraryData, pathData] = await Promise.all([
      await $axios.get('/api/itineraryList/' + id),
      await $axios.get('/api/getNames/' + id)
    ])
    return {
      itineraryName: itineraryData.data.itineraryName,
      itineraryImage: itineraryData.data.itineraryImage,
      itineraryMap: itineraryData.data.itineraryMap,
      itineraryDescription: itineraryData.data.itineraryDescription,
      itineraryPath: itineraryData.data.itineraryPath.split(','),
      itineraryTime: itineraryData.data.itineraryTime,
      myList: pathData.data

    }
  },
  data() {
    return {
      itineraryPath: [],
      myList: []
    }
  },
  head() {
    return {
      title: this.itineraryName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Breve descrizione e informazioni relative al seguente itinerario: ' +
            this.itineraryName,
        },
        { 
          name: 'keywords',
          content: 'Bologna, Italia, Itinerari Bologna, ' + this.itineraryName
        }
      ],
    }
  },
}
</script>

<style scoped>
.skeleton_container {
  margin-top: 5rem;
}
</style>

<template>
  <div class="skeleton_container">
    <Skeleton
      :title="pointOfInterestName"
      :img="pointOfInterestImage"
      :mapimg="pointOfInterestMap"
      :address="pointOfInterestAddress"
      :description="pointOfInterestDescription"
      :time="pointOfInterestTime"
      :eventList = "myList"
      :itinerariesData = "itinerariesData"
    />
  </div>
</template>

<script>
import Skeleton from '~/components/Skeleton.vue'
export default {
  components: { Skeleton },
  // Retrieve all data of a specific POI
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const [ poiData, eventData, itinerariesData ] = await Promise.all([
      await $axios.get('/api/poiList/' + id),
      await $axios.get('/api/poiEventList/' + id),
      await $axios.get('/api/getItineraryList/' + id)

    ])
    return {
      pointOfInterestName: poiData.data.pointOfInterestName,
      pointOfInterestImage: poiData.data.pointOfInterestImage,
      pointOfInterestMap: poiData.data.pointOfInterestMap,
      pointOfInterestAddress: poiData.data.pointOfInterestAddress,
      pointOfInterestDescription: poiData.data.pointOfInterestDescription,
      pointOfInterestTime: poiData.data.pointOfInterestTime,
      myList: eventData.data,
      itinerariesData: itinerariesData.data
    }
  },
  data(){
    return {
      myList: [],
      itinerariesData: []
    }
  },
  head() {
    return {
      title: this.pointOfInterestName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Breve descrizione e informazioni relative al punto di interesse: ' +
            this.pointOfInterestName,
        },
        { 
          name: 'keywords',
          content: 'Bologna, Italia, Monumenti Bologna, Eventi Bologna, Servizi Bologna, Punti interesse Bologna, Itinerari Bologna, ' +
            this.pointOfInterestName,
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

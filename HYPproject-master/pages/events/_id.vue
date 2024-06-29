<template>
  <div class="skeleton_container">
    <SkeletonEvent
      :title="eventName"
      :img="eventImage"
      :address="eventAddress"
      :description="eventDescription"
      :time="eventDate"
      :poiName="poiName"
      :poiId="poiId"
    />
  </div>
</template>

<script>
import SkeletonEvent from '../../components/SkeletonEvent.vue'
export default {
  components: { SkeletonEvent },
  // Retrieve all data of a specific POI
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const [eventData, poiData] = await Promise.all([
      await $axios.get('/api/eventSpecific/' + id),
      await $axios.get('/api/poiByEvent/' + id),
    ])
    return {
      eventName: eventData.data.eventName,
      eventImage: eventData.data.eventImage,
      eventAddress: eventData.data.eventAddress,
      eventDescription: eventData.data.eventDescription,
      eventDate: eventData.data.eventDate,
      poiName: poiData.data.pointOfInterestName,
      poiId: poiData.data.pointOfInterestId,
    }
  },
  head() {
    return {
      title: this.eventName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Breve descrizione e informazioni relative su questo evento: ' +
            this.eventName,
        },
        {
          name: 'keywords',
          content:
            'Bologna, Italia, Monumenti Bologna, Eventi Bologna, Punti interesse Bologna, ' +
            this.eventName,
        },
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

<template>
  <div class="breadcrumb-cont">
    <ul>
      <li><NuxtLink class="link" to="/">← Ritorna alla Home</NuxtLink></li>
      <li v-if="this.$route.fullPath.split('/')[1] != null">/</li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'explore'">
        <NuxtLink class="link" :to="`/explore`">Scopri la città</NuxtLink
        >
      </li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'itineraries'">
        <NuxtLink class="link" :to="`/itineraries`">Itinerari</NuxtLink
        >
      </li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'events'">
        <NuxtLink class="link" :to="`/events`">Eventi</NuxtLink
        >
      </li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'services'">
        <NuxtLink class="link" :to="`/services`">Servizi</NuxtLink
        >
      </li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'contacts'">
        <NuxtLink class="link" :to="`/contacts`">Contatti</NuxtLink
        >
      </li>
      <li v-if="this.$route.fullPath.split('/')[1] != null && this.$route.fullPath.split('/')[1] === 'aboutus'">
        <NuxtLink class="link" :to="`/aboutus`">About Bologna</NuxtLink
        >
      </li>

      <li v-if="this.$route.fullPath.split('/')[2] != null">/</li>
      <li v-if="poiId != null">
        <NuxtLink class="link" :to="`/explore/` + poiId">{{ poiName }}</NuxtLink
        >
      </li>
      <li v-if="eventId != null">
        <NuxtLink class="link" :to="`/events/` + eventId">{{ eventName }}</NuxtLink
        >
      </li>
      <li v-if="itineraryId != null">
        <NuxtLink class="link" :to="`/itineraries/` + itineraryId">{{ itineraryName }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    eventName: {
      type: String,
      default: null,
    },
    eventId: {
      type: String,
      default: null,
    },
    itineraryName: {
      type: String,
      default: null,
    },
    itineraryId: {
      type: String,
      default: null,
    },
    poiName: {
      type: String,
      default: null,
    },
    poiId: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  display: inline-flex;
}

li {
    margin-right: 1rem;
}
.link {
  text-decoration: none;
  color: rgb(187, 64, 34);
}
@media (min-width: 10em) {
.breadcrumb-cont {
  margin-top:2rem;
  font-size: 0.9rem;
  font-weight: 400;
}
}
@media (min-width: 60em) {
.breadcrumb-cont {
  margin-top:4rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
}
}
</style>

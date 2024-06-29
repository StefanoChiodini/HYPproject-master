<template>
  <div class="skeleton">
    <Breadcrumbs 
    :poiId="this.$route.fullPath.split('/')[2]"
    :poiName="title"
    />
    <div class="info-container">
      <h1 class="header child">{{ title }}</h1>
      <div class="imgbox child">
        <img class="image" :src="img" alt="" />
      </div>
      <p class="description child">{{ description }}</p>
      <h2 class="child">Vieni a trovarci</h2>
      <hr class="child" />
      <p class="address child">Indirizzo: {{ address }}</p>
      <p class="time child">Orario di apertura: {{ time }}</p>
      <div class="events child">
        <p v-if="eventList.length != 0" class="snip">
          Alcuni eventi che si terranno in questo punto di interesse:
        </p>
        <NuxtLink
          v-for="el of eventList"
          :key="el.eventId"
          :to="'/events/' + el.eventId"
          class="text"
          >• {{ el.eventName }}
        </NuxtLink>
      </div>
      <div class="itineraries child">
        <p v-if="itinerariesData.length != 0" class="snip">
          Gli itinerari che visitano questo punto di interesse:
        </p>
        <NuxtLink
          v-for="el of itinerariesData"
          :key="el.itineraryId"
          :to="'/itineraries/' + el.itineraryId"
          class="text"
          >• {{ el.itineraryName }}
        </NuxtLink>
      </div>
      <div v-if="mapimg != null" class="mapbox child">
        <img class="map_img" :src="mapimg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue'
export default {
  components: { Breadcrumbs },
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    mapimg: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
    eventList: {
      type: Array,
      default: null,
    },
    itinerariesData: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped>
.skeleton {
  margin-top: 8rem;
}
h3 {
  background-color: rgb(187, 64, 34);
  border-radius: 20rem;
  padding: 0.5rem 0.3rem;
  width: 10em;
  text-align: center;
  justify-content: center;
}
.info-container {
  display: grid;
  width: min(75%, 70rem);
  margin-inline: auto;
  padding-block: 2rem;
  grid-template-areas:
    'title'
    'description'
    'image'
    'map'
    'time'
    'subTitle'
    'hr'
    'events'
    'itineraries'
    'address';
  align-items: center;
}
.events,
.itineraries {
  padding: 0 1rem;
  border-left-color: rgb(187, 64, 34);
  border-left-style: solid;
  border-left-width: 3px;
}
.imgbox {
  display: flex;
  justify-content: center;
  align-items: top;
  margin-bottom: 2em;
  margin-top: 2em;
  max-height: 30em;
}
.mapbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20rem;
  margin-bottom: 2rem;
}

.time,
.address {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: pre-line;
  text-align: left;
  padding: 0 1rem;
  border-left-color: rgb(187, 64, 34);
  border-left-style: solid;
  border-left-width: 3px;
}
.text {
  white-space: pre-line;
  color: black;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;
  text-decoration: none;
}
p {
  margin-bottom: 0;
}
.snip {
  white-space: pre-line;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
}
.text:hover {
  color: rgb(187, 64, 34);
}
.image {
  width: 100%;
  object-fit: cover;
}
.map_img {
  width: 75%;
  margin-left: 0;
  border-radius: 50px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.child:nth-child(1) {
  grid-area: title;
}
.child:nth-child(2) {
  grid-area: image;
}
.child:nth-child(3) {
  grid-area: description;
}
.child:nth-child(4) {
  grid-area: subTitle;
}
.child:nth-child(5) {
  grid-area: hr;
}
.child:nth-child(6) {
  grid-area: address;
}
.child:nth-child(7) {
  grid-area: time;
}
.child:nth-child(8) {
  grid-area: events;
}
.child:nth-child(9) {
  grid-area: itineraries;
}
.child:nth-child(10) {
  grid-area: map;
}
hr {
  width: 90%;
  justify-content: center;
}

@media (min-width: 10em) {
  .info-container {
    grid-template-areas:
      'title'
      'image'
      'subTitle'
      'address'
      'time'
      'description'
      'hr'
      'map'
      'events'
      'itineraries';
    padding-top: 0;
  }
  .header {
    font-weight: 600;
    font-size: 2.5rem;
    margin: 1rem 0rem;
  }
  .description {
    color: black;
    font-size: 1.2rem;
    margin-top: 1rem;
    font-weight: 300;
    margin-bottom: 2rem;
    white-space: pre-line;
  }
}

@media (min-width: 60em) {
  .info-container {
    grid-template-areas:
      'title title'
      'image image'
      'description description'
      'hr hr'
      'map subTitle'
      'map address'
      'map time'
      'map events'
      'map events'
      'map itineraries'
      'map itineraries';
  }
  .header {
    font-weight: 800;
    font-size: 3.5rem;
    margin: 1rem 0rem;
  }
  .description {
    color: black;
    font-size: 1.5rem;
    margin-top: 1rem;
    font-weight: 300;
    margin-bottom: 2rem;
    white-space: pre-line;
  }
}
</style>

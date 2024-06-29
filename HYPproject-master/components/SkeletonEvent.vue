<template>
  <div class="skeleton">
    <Breadcrumbs 
    :eventId="this.$route.fullPath.split('/')[2]"
    :eventName="title"
    />
    <div class="info-container">
      <h1 class="header child">{{ title }}</h1>
      <div class="imgbox child">
        <img class="image" :src="img" alt="" />
      </div>
      <p class="description child">{{ description }}</p>
      <hr class="child" />
      <h2 class="child">Vieni a trovarci</h2>
      <NuxtLink
        v-if="address.includes(poiName)"
        class="address child"
        :to="`/explore/` + poiId"
        >L'evento si terrà presso: {{ address }}</NuxtLink
      >
      <NuxtLink class="address child" :to="`/explore/` + poiId" v-else
        >L'evento si terrà presso: {{ address }}, {{ poiName }}</NuxtLink
      >
      <p class="time child">Orario: {{ time }}</p>
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
    poiName: {
      type: String,
      default: null,
    },
    poiId: {
      type: Number,
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
    'time'
    'subTitle'
    'hr'
    'address';
  align-items: center;
}
p {
  margin-bottom: 0;
}
.imgbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  /* margin-top: 2em; */
  max-height: 30em;
}
.mapbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20rem;
}

h2{
  text-align: left;
}

.time,
.address
{
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: pre-line;
  padding: 0 1rem;
  text-align: left;
  border-left-color: rgb(187, 64, 34);
  border-left-style: solid;
  border-left-width: 3px;
  text-decoration: none;
}
.address:hover {
  color: rgb(187, 64, 34);
}
.image {
  width: 100%;
  object-fit: cover;
  /* border-radius: 50px; */
  height: 15rem;
}
.map_img {
  width: 75%;
  margin-left: 0;
  border-radius: 50px;
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
  grid-area: hr;
}
.child:nth-child(5) {
  grid-area: subTitle;
}
.child:nth-child(6) {
  grid-area: address;
}
.child:nth-child(7) {
  grid-area: time;
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
      'description'
      'hr'
      'subTitle'
      'address'
      'time';
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
      'image description'
      'image description'
      'subTitle subTitle'
      'address address'
      'time time';
    column-gap: 2rem;
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

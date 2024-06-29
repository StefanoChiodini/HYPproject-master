<template>
  <div class="skeleton">
    <Breadcrumbs
      :itineraryId="this.$route.fullPath.split('/')[2]"
      :itineraryName="title"
    />
    <div class="info-container">
      <h1 class="header child">{{ title }}</h1>
      <div class="imgbox child">
        <img class="image" :src="img" alt="" />
      </div>
      <p class="description child">{{ description }}</p>
      <p class="time child">{{ time }}</p>
      <div class="path child">
        <h2>{{ texttitle }}</h2>
        <NuxtLink
          v-for="(el, index) of list"
          :key="el.pointOfInterestId"
          :to="'/explore/' + el.pointOfInterestId"
          class="text"
          >{{ index + 1 }}. {{ el.pointOfInterestName }}
        </NuxtLink>
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
    list: {
      type: Array,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    text: {
      type: Array,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    texttitle: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
h2 {
  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1em;
}
.skeleton {
  margin-top: 8rem;
}
.info-container {
  display: grid;
  width: min(75%, 70rem);
  margin-inline: auto;
  padding-block: 2rem;
  grid-template-areas:
    'title'
    'image'
    'description'
    'time'
    'texttitle'
    'text';
  align-items: center;
}
.imgbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
.mapbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20rem;
}
.time {
  color: black;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-weight: 500;
}
.image {
  object-fit: cover;
  max-width: 100%;
  margin-left: 0;
  border-radius: 50px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.path {
  margin: 1rem 2rem;
  border: 5px;
  padding: 0 1rem;
  text-align: left;

  border-left-color: rgb(187, 64, 34);
  border-left-style: solid;
  border-left-width: 3px;
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
  grid-area: time;
}
.child:nth-child(5) {
  grid-area: path;
}
.textbox {
  justify-content: center;
  margin: 3em 0em;
}
.text:hover {
  color: rgb(187, 64, 34);
}
.text {
  text-decoration: none;
}
@media (min-width: 10em) {
  .info-container {
    grid-template-areas:
      'title'
      'time'
      'description'
      'image'
      'path';
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
  .text {
    color: black;
    font-size: 1.45rem;
    margin-top: 1rem;
    font-weight: 300;
    white-space: pre-line;
    text-align: left;
  }
  .image {
    margin-bottom: 2rem;
  }
}

@media (min-width: 60em) {
  .header {
    font-weight: 800;
    font-size: 3.5rem;
    margin: 1rem 0rem;
  }
  .text {
    white-space: pre-line;
    color: black;
    font-size: 1.2rem;
    font-weight: 300;
    text-align: left;
  }
  .info-container {
    grid-template-areas:
      'title title title title'
      'time time time time'
      'description description description description'
      'image image image path'
      'image image image path'
      'image image image path';
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

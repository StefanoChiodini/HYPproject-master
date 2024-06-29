<template>
  <div class="card">
    <img class="card-img" :src="img" :alt="title" />
    <div class="card-content">
      <h2 class="card-header">{{ title }}</h2>
      <p class="card-text snippet"> 
        {{ snippet }}
      </p>
      <div class="moreinfo-container">
        <div v-if="address != null" class="card-text moreinfo">
          <NuxtLink v-if="clickable" class="link" :to="`/explore/${id}`">{{ address }}</NuxtLink>
          <p v-else >{{ address }}</p>
        </div>
        <p v-if="time != null" class="card-text moreinfo">
          {{ time }}
        </p>
        <p v-if="phone != null" class="card-text moreinfo">
          {{ phone }}
        </p>
      </div>
      <NuxtLink v-if="buttonsnippet != null" :to="link"
        ><button class="button">{{ buttonsnippet }}</button></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
    snippet: {
      type: String,
      default: null,
    },
    buttonsnippet: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: '/',
    },
    address: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}

p {
  margin-bottom: 0;
}

.link {
  text-decoration: none;
  color: black;
}
.link:hover{
  text-decoration: none;
  color: rgb(187, 64, 34);
  transition: 0.2s;
  text-decoration: double;
}

.card-img {
  object-fit: cover;
  height: 8rem;
  width: auto;
}

.card-content {
  padding: 1rem 1rem;
}
.moreinfo-container {
  text-align: right;
  height: 10rem;
}

.card-header {
  font-size: 1.35rem;
  font-weight: 600;
  color: #0d0d0d;
  background-color: white;
  margin-bottom: 1rem;
  border: none;
  padding: 0px;
  height: 3rem;
}

.card-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  margin-bottom: 1rem;
  
}
.moreinfo {
  font-weight: 600;
  margin-bottom: 0;
}

.card:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.3);
}

.button {
  border-radius: 20rem;
  background-color: rgb(187, 64, 34);
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: 700;
  transition: 0.5s;
  border: none;
  font-size: 1rem;
  padding: 0.75em 1.5em;
  position: absolute;
  bottom:1rem;
}

.button:hover {
  padding: 0.75em 3em;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.3);
}

</style>

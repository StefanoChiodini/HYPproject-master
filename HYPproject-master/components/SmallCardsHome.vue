<template>
  <div class="card-container">
    <div class="card" :bg="title">
      <div class="flexbox">
        <h3 class="card-title">{{ title }}</h3>
        <img class="image" :src="require(`@/assets/${img}`)" alt="Card image" />
      </div>
      <NuxtLink class="nuxt-link" :to="link">
        <button class="button" :title="title">{{ buttonsnippet }}</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    buttonsnippet: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: '/',
    },
    snippet: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.card-container {
  justify-content: center;
}
.nuxt-link {
  justify-content: center;
  align-items: center;
}

.card-snippet {
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.image {
  width: 4rem;
  height: 4rem;
  margin-left: 2rem;
  -webkit-filter: invert(100%);
  filter: invert(100%);
  text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.4);
}
.card {
  display: grid;
  padding: 2rem;
  border-radius: 3rem;
}
.card-title {
  color: white;
  font-size: 2.5rem;
  text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.4);
}

.button {
  padding: 1rem 1.5rem;
  border-radius: 100rem;
  color: white;
  border: none;
  width: 15em;
  font-size: 1rem;
  transition: 0.5s;
  font-weight: 700;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.button:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  
}

.flexbox {
  display: flex;
  flex-wrap: nowrap;
}

[title~='Eventi'] {
  background-color: #0023b1;
}

[title~='Itinerari'] {
  background-color: #704215;
}

[title~='Servizi'] {
  background-color: #096900;
}

[bg~='Eventi'] {
  background-color: #0000ff;
  opacity: 0.8;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #0000ff 11px
    ),
    repeating-linear-gradient(#007aff55, #007aff);
}

[bg~='Itinerari'] {
  background-color: #d5a86e;
  opacity: 0.8;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #d5a86e 10px
    ),
    repeating-linear-gradient(#5c300555, #5c3005);
}

[bg~='Servizi'] {
  background-color: #00a509;
  opacity: 0.8;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #00a509 11px
    ),
    repeating-linear-gradient(#41ff2f55, #41ff2f);
}

@media (min-width: 10em) {
  .card-container {
    width: 20rem;
    height: 15rem;
  }
  .card {
    width: 20rem;
    height: 15rem;
  }
  .button {
    margin-top: 1rem;
    justify-content: center;
    text-align: center;
  }
}
@media (min-width: 60em) {
  .card-container {
    width: 18rem;
    height: auto;
  }
  .card {
    width: 18rem;
    height: auto;
  }
  .button {
    margin-top: 2rem;
    justify-content: center;
    text-align: center;
  }
}

@media (min-width: 70em) {
  .card-container {
    height: 22rem;
    width: auto;
  }
  .card {
    height: 22rem;
    width: auto;
  }
  .button {
    margin-top: 10rem;
    justify-content: center;
    text-align: center;
  }
}
</style>

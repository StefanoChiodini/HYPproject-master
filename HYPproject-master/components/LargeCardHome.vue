<template>
  <div class="LargeCard">
    <h1 class="header child">{{ title }}</h1>
    <div class="imgbox child">
      <img class="image" :src="require(`@/assets${img}`)" :alt = "altimg"/>
    </div>
    <p class="snippet child">{{ snippet }}</p>
    
    <NuxtLink v-if="buttonsnippet != null" class="child" :to="link">
      <button class="button">
        {{ buttonsnippet }}
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
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
    altimg: {
      type: String,
      default: null,
    }
  },
}
</script>

<style scoped>
.LargeCard {
  display: grid;
  gap: 1rem;
  width: min(75%, 90rem);
  margin-inline: auto;
  padding-block: 2rem;
  grid-template-areas:
    'title'
    'image'
    'snippet'
    'button'
    'blank';
  align-items: center;
}
.imgbox {
  display: flex;
  justify-content: center;
}
.header {
  margin: 0;
}
.snippet {
  color: black;
  margin-top: 1rem;
  white-space: pre-line;
}
.button {
  border-radius: 20rem;
  background-color: rgb(187, 64, 34);
  color: white;
  font-weight: 800;
  transition: 0.5s;
  border: none;
  font-size: 1rem;
  padding: 1rem 3rem;
  white-space: nowrap;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.button:hover {
  padding: 1em 4em;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
}

.child:nth-child(1) {
  grid-area: title;
}
.child:nth-child(2) {
  grid-area: image;
}
.child:nth-child(3) {
  grid-area: snippet;
}
.child:nth-child(4) {
  grid-area: button;
}

@media (min-width: 10em) {
  .LargeCard {
    grid-template-areas:
      'title image'
      'snippet snippet'
      'button button';
  }

  .header {
    font-size: 2rem;
    font-weight: 600;
  }
  .snippet {
    font-size: 1rem;
    font-weight: 400;
  }

  .image {
    max-width: 4rem;
  }
}

@media (min-width: 60em) {
  .LargeCard {
    grid-template-areas:
      'title title title image image'
      'snippet snippet snippet image image'
      'button button blank blank blank';
  }
  .header {
    font-size: 3.5rem;
    font-weight: 700;
  }
  .snippet {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .image {
    max-width: 10rem;
  }
}
</style>

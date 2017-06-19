<template>
  <div class="pa4 ph5-ns">
    <h1 class="">Open Multiple URL at Once!</h1>
    <form>
      <fieldset>
        <textarea class="w-100 min-h" v-model="text"></textarea>
      </fieldset>
      <button @click.prevent="openURLs">Open Multiple URLs</button>
    </form>
    <div>
      Detected Urls:
      <ul>
        <li v-for="URL in URLs">{{URL}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import geturls from 'get-urls'

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    URLs() {
      return Array.from(geturls(this.text))
    }
  },
  methods: {
    openURLs() {
      this.URLs.forEach(val => {
        window.open(val)
      })
    }

  }
}
</script>


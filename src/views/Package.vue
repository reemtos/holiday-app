<template>
    <div id="package" class="package">
        <Header />
        <section class="section section__intro" v-bind:style="styles">
            <div class="intro-section text-center">
                <div class="container mini">
                <h1 class="heading-primary intro-phrase">Holiday at a {{selectedPackage.name}} area.</h1>
                <h4 class="heading-tertiary intro-paraphrase">{{selectedPackage.paraphrase}}</h4>
                </div>
            </div>
        </section>
        <section class="section section__slideshow">
            <div class="container">
                <carousel v-if="!loader" class="slides" autoplay :autoplayTimeout="5000" loop :perPage="1">
                    <slide class="slide" v-for="photo of this.photos" v-bind:key="photo.id">
                        <img v-bind:src="photo.urls.regular" class="slide__image" alt="">
                    </slide>
                </carousel>
                <p class="paragraph" v-if="loader">Pictures are loading..</p>
            </div>
        </section>
        <section class="section section__package-info">
            <div class="container">
                <p class="paragraph">{{selectedPackage.description}}</p>
                <div class="features">
                    <Features v-bind:items="selectedPackage.features" />
                </div>
                <div class="cta">
                    <router-link to="/#" class="button button--buy">
                        Buy {{ selectedPackage.name }} Package
                    </router-link>
                    <router-link to="/#packagesSection" class="button button--outline">
                        change package
                    </router-link>
                </div>
            </div>
        </section>
        <section class="section section__testimonial text-center">
            <div class="container mini">
                <h3 class="heading-secondary mb-small">From people who have enjoyed sunny package.</h3>
            </div>
            <div class="container">
                <Testimonials v-bind:testimonies="selectedPackage.testimonies" />
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'
import Header from '../components/header'
import Footer from '../components/footer'
import Features from '../components/features'
import Testimonials from '../components/testimonials'
import bgImg from '../assets/videos/pool.jpg'
import AvailablePackages from '../data/data.packages'
export default {
  name: 'Package',
  data () {
    return {
      styles: {
        'background-image':
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' +
          bgImg +
          ')'
      },
      image: bgImg,
      loader: true,
      selectedPackage: {},
      packages: [...AvailablePackages],
      packageIdentifier: '',
      photos: []
    }
  },
  created () {
    this.packageIdentifier = this.$route.params.packageName
    if (this.packageIdentifier) {
      this.selectedPackage = this.packages.find(
        singlePackage => singlePackage.identifier === this.packageIdentifier
      )
    }
  },
  components: {
    Carousel,
    Features,
    Footer,
    Header,
    Slide,
    Testimonials
  },
  mounted () {
    axios({
      method: 'get',
      url:
        'https://api.unsplash.com/search/photos?page=1&query=' +
        this.selectedPackage.fetchQuery +
        '&per_page=10',
      headers: {
        Authorization:
          'Client-ID d2fd2e1b6eac8dcedcb31236c754580824fffd2d251f15c91894ebb1340f5538'
      }
    })
      .then(response => {
        this.photos = response.data.results
        this.loader = false
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>

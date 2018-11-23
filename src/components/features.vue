<template>
    <ul class="list">
        <li class="list__item" v-for="(item, index) in items" v-bind:key="index">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Features',
  props: ['items']
}
</script>

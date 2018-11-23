<template>
    <div class="faqs">
        <div class="faq" v-for="list in lists" v-bind:key="list.id">
            <div class="details">
                <h3 class="heading-tertiary mb-smaller">{{list.question}}</h3>
                <p class="paragraph">{{list.answer}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FAQ',
  props: ['lists']
}
</script>

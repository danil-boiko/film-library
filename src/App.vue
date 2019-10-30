<template lang="pug">
  .wrapper
    header
      .navbar
        .container
          .navbar-content
            a.header-logo() Film library
            .button-burger
              span.line.line-1
              span.line.line-2
              span.line.line-3
            .navbar-list__wrapper
              ul.navbar-list
                li.navbar-item
                  a.navbar-link(href='get-started.html') Documetation

    .content-wrapper
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './assets/stylus/main.styl'
</style>

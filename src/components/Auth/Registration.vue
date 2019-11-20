<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth__banner
           h1.ui-title-2 Hello banner
          .auth__form
            span.ui-title-2 Registration
            form
              .form-item(:class="{ 'errorInput': $v.email.$error }")
                input(
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  :class="{ error: $v.email.$error }"
                  @change="$v.email.$touch()"
                )
                .error(v-if="!$v.email.required") Field is required
                .error(v-if="!$v.email.email") Email is not correct
              input(
                type="password"
                placeholder="Password"
                v-model="password"
              )
              input(
                type="password"
                placeholder="Repeat your password"
                v-model="repeatPassword"
              )
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="stylus" scoped>
.auth
  display flex
.auth__banner,
.auth__form
  width: 50%

.form-item
  .error
    display none
    margin-bottom 8px
    font-size 13.4px
    color #fc5c65
  &.errorInput
    .error
      display block

input
  &.error
    border-color #fc5c65
</style>

import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
} from 'vee-validate'
import { required, email, numeric, mimes, size } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)

extend('email', email)

extend('numeric', numeric)

extend('mimes', mimes)

extend('size', size)

extend('min', {
  validate(value, { min }) {
    return value.length >= min
  },
  params: ['min'],
})

extend('min_value', {
  validate(value, { minValue }) {
    return +value >= minValue
  },
  params: ['minValue'],
})

extend('max', {
  validate(value, { max }) {
    return value.length <= max
  },
  params: ['max'],
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
})

extend('decimal', {
  validate: (value, { decimals = '*', separator = '.' } = {}) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false,
      }
    }
    if (Number(decimals) === 0) {
      return {
        valid: /^-?\d*$/.test(value),
      }
    }
    const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`
    const regex = new RegExp(
      `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
    )

    return {
      valid: regex.test(value),
    }
  },
})

extend('phoneExist', {
  validate(value, params) {
    return params[0] === 'true'
  },
})

export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values),
  })
}

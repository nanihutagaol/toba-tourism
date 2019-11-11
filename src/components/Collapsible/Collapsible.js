export default {
  data () {
    return {
      collapsedState: true
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    useArrow: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  watch: {
    collapsed: {
      immediate: true,
      handler (val) {
        if (this.collapsedState !== val) {
          this.collapsedState = val
          this.$emit('onToggle', this.collapsedState)
        }
      }
    }
  },
  methods: {
    toggleCollapsible () {
      this.collapsedState = !this.collapsedState
      this.$emit('onToggle', this.collapsedState)
    }
  }
}

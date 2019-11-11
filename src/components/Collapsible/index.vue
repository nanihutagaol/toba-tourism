<template>
  <div class="collapsible-card">
    <div class="">

      <div class="collapsible-header"
        :class="showCollapse ? 'collapsed' : null"
        :aria-expanded="showCollapse ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="showCollapse = !showCollapse"
      >
        <slot name="coll-label">
          {{label}}
        </slot>
        <div
          v-if="useArrow"
          :class="{expanded: !showCollapse}"
          @click="toggleCollapsible">
          <i v-if="showCollapse" class="fa fa-caret-up"/>
          <i v-else class="fa fa-caret-down"/>
        </div>
      </div>

      <b-collapse id="collapse-4" v-model="showCollapse">
        <div class="collapsible-content">
          <slot name="content">Default content</slot>
        </div>
      </b-collapse>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsedState: true,
      showCollapse: true
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    useArrow: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: 'Default Label'
    }
  },
  watch: {
    collapsed: {
      immediate: true,
      handler (val) {
        if (this.showCollapse !== val) {
          this.showCollapse = val
          this.$emit('onToggle', this.showCollapse)
        }
      }
    }
  },
  methods: {
    toggleCollapsible () {
      this.showCollapse = !this.showCollapse
      this.$emit('onToggle', this.showCollapse)
    }
  }
}
</script>

<style scoped>
  .collapsible-card {
    border-radius: 0.25em;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .collapsible-header {
    align-items: center;
    cursor: pointer;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .collapsible-content {
    text-align: justify;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.5em 0;
    margin: 0 1em;
    font-size: 14px;
  }
</style>

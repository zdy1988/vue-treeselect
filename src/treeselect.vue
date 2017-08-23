<template>
  <div :class="classes" v-click-outside="close">
    <button type="button" class="tree-select-single" v-if="selectedItems.length <= 1" @click="open = !open">
      <span v-if="selectedItems.length === 0">{{placeholder}}</span>
      <span v-if="selectedItems.length === 1">{{selectedItems[0].text}}</span>
    </button>
    <div class="tree-select-multiple" v-else>
      <div class="tree-select-tag" v-for="item in selectedItems">
        {{item.text}}
      </div>
    </div>
    <i class="tree-selec-allow" @click="open = !open"></i>
    <div class="tree-select-dropdown">
      <tree :data="data"
            :size="size"
            :showCheckbox="showCheckbox"
            :wholeRow="wholeRow"
            :noDots="noDots"
            :multiple="multiple"
            :allowBatch="allowBatch"
            :textFieldName="textFieldName"
            :valueFieldName="valueFieldName"
            :async="async"
            :loadingText="loadingText"
            @item-click="itemClick"></tree>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Tree from './tree.vue'

  function handleRecursionDataChilds (items, func) {
    if (items && items.length > 0) {
      for (let i in items) {
        var item = items[i]
        func(items, item, i)
        if (item.children && item.children.length > 0) {
          handleRecursionDataChilds(item.children, func)
        }
      }
    }
  }

  Vue.directive('clickOutside', {
    bind: function (el, binding, vNode) {
      if (typeof binding.value !== 'function') {

        let msg = `in [clickoutside] directives, provided expression '${binding.expression}' is not a function `

        const compName = vNode.context.name

        if (compName) {
          msg += `in ${compName}`
        }
        console.error(msg)
      }

      var handler = (e) => {
        if (!el.contains(e.target) && el !== e.target) {
          binding.value(e)
        } else {
          return false
        }
      }

      el.__clickOutSide__ = handler

      document.addEventListener('click', handler, true)
    },
    unbind: function (el) {
      document.removeEventListener('click', el.__clickOutSide__, true)
      el.__clickOutSide__ = null

    }
  })

  export default{
    data () {
      return {
        open: false,
        selectedItems: []
      }
    },
    props: {
      value: null,
      placeholder:{type: String, default: '请选择'},
      data: {type: Array},
      size: {type: String, validator: value => ['large', 'small'].indexOf(value) > -1},
      showCheckbox: {type: Boolean, default: false},
      wholeRow: {type: Boolean, default: false},
      noDots: {type: Boolean, default: false},
      multiple: {type: Boolean, default: false},
      allowBatch: {type: Boolean, default: false},
      textFieldName: {type: String, default: 'text'},
      valueFieldName: {type: String, default: 'value'},
      async: {type: Function},
      loadingText: {type: String, default: 'Loading...'},
      klass: String
    },
    model: {
      prop: 'value',
      event: 'update:value'
    },
    computed: {
      classes () {
        return [
          {'tree-select': true},
          {'tree-select-open': this.open},
          {[this.klass]: !!this.klass}
        ]
      }
    },
    methods: {
      itemClick () {
        this.selectedItems.length = 0
        handleRecursionDataChilds(this.data, (items, item, i) => {
          if (item.selected) {
            this.selectedItems.push({
              text: item[this.textFieldName],
              value: item[this.valueFieldName]
            })
          }
        })
        if (this.selectedItems.length === 1) {
          this.$emit('update:value', this.selectedItems[0].value)
        } else if (this.selectedItems.length > 1) {
          this.$emit('update:value', this.selectedItems.map(item => {
            return item.value
          }))
        } else {
          this.$emit('update:value', null)
        }
      },
      close () {
        this.open = false
      }
    },
    components: {
      Tree
    }
  }
</script>
<style lang="less">
  @import "./less/style";
</style>

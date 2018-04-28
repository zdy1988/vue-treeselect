<template>
  <div :class="classes" onselectstart="return false">
    <button type="button" class="tree-select-single" @click="open = !open" v-if="selectedItems.length <= 1">
      <span v-if="selectedItems.length === 0">{{placeholder}}</span>
      <span v-if="selectedItems.length === 1">{{selectedItems[0].text}}</span>
    </button>
    <div class="tree-select-multiple" @click="open = !open" v-else>
      <div class="tree-select-tag" v-for="item in selectedItems">
        {{item.text}}
      </div>
    </div>
    <i class="tree-selec-allow" @click="open = !open"></i>
    <div class="tree-select-dropdown">
      <v-jstree :data="data" ref="tree"
            :size="size"
            :showCheckbox="showCheckbox"
            :allowTransition="allowTransition"
            :wholeRow="wholeRow"
            :noDots="noDots"
            :multiple="multiple"
            :allowBatch="allowBatch"
            :textFieldName="textFieldName"
            :valueFieldName="valueFieldName"
            :childrenFieldName="childrenFieldName"
            :async="async"
            :loadingText="loadingText"
            @item-click="itemClick"></v-jstree>
    </div>
  </div>
</template>
<script>
  import VJstree from 'vue-jstree/src/tree.vue'

  export default{
    name: 'VTreeSelect',
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
      allowTransition: {type: Boolean, default: true},
      wholeRow: {type: Boolean, default: false},
      noDots: {type: Boolean, default: false},
      multiple: {type: Boolean, default: false},
      allowBatch: {type: Boolean, default: false},
      textFieldName: {type: String, default: 'text'},
      valueFieldName: {type: String, default: 'value'},
      childrenFieldName: {type: String, default: 'children'},
      async: {type: Function},
      loadingText: {type: String, default: 'Loading...'},
      klass: String
    },
    model: {
      prop: 'value',
      event: 'update:value'
    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.selectedItems = []
          this.updateValue(val)
        }
      }
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
        var self = this
        this.selectedItems = []
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, node => {
          if (node.model && node.model.selected) {
            self.addSelectNode(node)
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
      addSelectNode (node) {
        this.selectedItems.push({
          text: node.model[this.textFieldName],
          value: node.model[this.valueFieldName]
        })
      },
      updateValue (val) {
        var self = this
        var isBreak = false
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, node => {
          if (node.model) {
            if (this.multiple) {
              if (val.indexOf(node.model[self.valueFieldName]) !== -1) {
                self.addSelectNode(node)
                node.model.selected = true
              } else {
                node.model.selected = false
              }
            } else {
              if (isBreak === false) {
                if (node.model[self.valueFieldName] === val) {
                  isBreak = true
                  self.addSelectNode(node)
                  node.model.selected = true
                } else {
                  node.model.selected = false
                }
              }
            }
          }
        })
      }
    },
    mounted () {
      var el = this.$el
      document.addEventListener('click', (e) => {
        if (!el.contains(e.target) && el !== e.target) {
          this.open = false
        } else {
          return false
        }
      }, true)
      if (this.value) {
        this.updateValue(this.value)
      }
    },
    components: {
      VJstree
    }
  }
</script>
<style lang="less">
  .tree-select {
    width: 100%;
    height: auto;
    line-height: 1.42857;
    color: #555;
    border: 1px solid #c2cad8;
    background-color: #fff;
    display: inline-block;
    outline: 0!important;
    box-shadow: none!important;
    position: relative;
    vertical-align: middle;

    > .tree-select-single{
      width: 100%;
      line-height: 1.44;
      padding-right: 25px;
      text-align: left;
      margin-bottom: 0;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      border: none;
      background-color: #fff;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      outline: 0!important;

      &:hover {
        transition: all .3s;
        background-color: #e1e5ec;
      }
    }

    > .tree-select-multiple{
      max-width: 100%;
      line-height: 24px;
      padding: 4px 32px 2px 6px;
      vertical-align: middle;
      cursor: pointer;

      > .tree-select-tag {
        display: inline-block;
        background-color: #36c6d3;
        margin-right: 2px;
        margin-bottom: 2px;
        color: white;
        text-shadow: none!important;
        font-size: 14px;
        font-weight: 300;
        padding: 0px 6px;
      }
    }

    > .tree-select-dropdown{
      cursor: pointer;
      position: absolute;
      width: 100%;
      max-height: 0px;
      overflow: auto;
      min-height: 0px;
      z-index: 1000!important;
      background-color: #fff;
      border: 1px solid #eee;
      border-top: 0px;
      border-bottom: 0px;
      margin: 1px 0px 0px -1px;
      transition: all .3s ease-in-out;

      > .tree {
        margin: 8px;
      }
    }

    > .tree-selec-allow{

      cursor: pointer;

      width:0px;
      height:0px;
      border-width:6px;
      border-style:solid;
      border-color:#555 transparent transparent;
      font-size:0;
      line-height:0;

      position: absolute;
      top:10px;
      right:10px;
      transition: all .3s;
      transform:rotate(90deg);

    }

    &.tree-select-open{
      > .tree-selec-allow{
        transform:rotate(0deg);
        top:12px;
        right:8px;
      }
      > .tree-select-dropdown{
        border-bottom: 1px solid #eee;
        margin: 1px -1px 0px -1px;
        max-height: 400px;
      }
    }
  }
</style>

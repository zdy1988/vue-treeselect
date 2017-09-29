# vue-treeselect

> A Tree Select Plugin For Vue2.0+

![vue-treeselect](./pic.png)

This Plugin is based on [vue-jstree](https://github.com/zdy1988/vue-jstree), Some "props" can be used for reference !

##  NPM

```html
    npm install vue-treeselect
```

##  ES6

```html
    import VTreeselect from 'vue-treeselect'
    
    new Vue({
      components: {
        VTreeselect
      }
    })
```

##  Setup

```html
    npm install
    npm run dev
```

## Usage

```html
    <v-tree-select :data="data" value-field-name="id" v-model="selectItem"></v-tree-select>
    
      new Vue({
        el: '#app',
        data: {
          data: [
            {
              "text": "Same but with checkboxes",
              "children": [
                {
                  "text": "initially selected",
                },
                {
                  "text": "custom icon",
                },
                {
                  "text": "initially open",
                  "children": [
                    {
                      "text": "Another node"
                    }
                  ]
                },
                {
                  "text": "custom icon",
                },
                {
                  "text": "disabled node",
                  "disabled": true
                }
              ]
            },
            {
              "text": "Same but with checkboxes",
              "children": [
                {
                  "text": "initially selected",
                },
                {
                  "text": "custom icon",
                },
                {
                  "text": "initially open",
                  "children": [
                    {
                      "text": "Another node"
                    }
                  ]
                },
                {
                  "text": "custom icon",
                },
                {
                  "text": "disabled node",
                  "disabled": true
                }
              ]
            },
            {
              "text": "And wholerow selection"
            }
          ],
          selectItem: null
        }
      })
```
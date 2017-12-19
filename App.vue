<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Tree Select</h2>
    <div style="width:400px; margin:0 auto; text-align:left;">
      <h3>Single Select Value: {{selectItem}}</h3>
      <v-tree-select :data="data" value-field-name="id" v-model="selectItem"></v-tree-select>
      <h3>Multiple Select Value: {{selectItem2}}</h3>
      <v-tree-select :data="data2" value-field-name="id" show-checkbox multiple v-model="selectItem2"></v-tree-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
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
        selectItem: 'Same but with checkboxes',
        data2: [
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
        selectItem2: [ 'Same but with checkboxes', 'initially selected' ]
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

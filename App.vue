<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Tree Select</h2>
    <div style="width:400px; margin:0 auto; text-align:left;">
      <h3>Single Select Value: {{selectItem}}</h3>
      <v-tree-select :data="data" value-field-name="id" v-model="selectItem"></v-tree-select>
      <button @click="selectItem = 2">set selectItem = 2</button>
      <h3>Multiple Select Value: {{selectItem2}}</h3>
      <v-tree-select :data="data2" value-field-name="id" show-checkbox multiple v-model="selectItem2"></v-tree-select>
      <button @click="selectItem2 = [4,5]">set selectItem2 = [4,5]</button>
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
            "id": 1,
            "text": "Same but with checkboxes",
            "children": [
              {
                "id": 2,
                "text": "initially selected",
              },
              {
                "id": 3,
                "text": "custom icon",
              },
              {
                "id": 4,
                "text": "initially open",
                "children": [
                  {
                    "id": 5,
                    "text": "Another node"
                  }
                ]
              },
              {
                "id": 6,
                "text": "custom icon",
              },
              {
                "id": 7,
                "text": "disabled node",
                "disabled": true
              }
            ]
          },
          {
            "id": 8,
            "text": "Same but with checkboxes",
            "children": [
              {
                "id": 9,
                "text": "initially selected",
              },
              {
                "id": 10,
                "text": "custom icon",
              },
              {
                "id": 11,
                "text": "initially open",
                "children": [
                  {
                    "id": 12,
                    "text": "Another node"
                  }
                ]
              },
              {
                "id": 13,
                "text": "custom icon",
              },
              {
                "id": 14,
                "text": "disabled node",
                "disabled": true
              }
            ]
          },
          {
            "id": 15,
            "text": "And wholerow selection"
          }
        ],
        selectItem: null,
        data2: [
          {
            "id": 1,
            "text": "Same but with checkboxes",
            "children": [
              {
                "id": 2,
                "text": "initially selected",
              },
              {
                "id": 3,
                "text": "custom icon",
              },
              {
                "id": 4,
                "text": "initially open",
                "children": [
                  {
                    "id": 5,
                    "text": "Another node"
                  }
                ]
              },
              {
                "id": 6,
                "text": "custom icon",
              },
              {
                "id": 7,
                "text": "disabled node",
                "disabled": true
              }
            ]
          },
          {
            "id": 8,
            "text": "Same but with checkboxes",
            "children": [
              {
                "id": 9,
                "text": "initially selected",
              },
              {
                "id": 10,
                "text": "custom icon",
              },
              {
                "id": 11,
                "text": "initially open",
                "children": [
                  {
                    "id": 12,
                    "text": "Another node"
                  }
                ]
              },
              {
                "id": 13,
                "text": "custom icon",
              },
              {
                "id": 14,
                "text": "disabled node",
                "disabled": true
              }
            ]
          },
          {
            "id": 15,
            "text": "And wholerow selection"
          }
        ],
        selectItem2: [ 3, 4 ]
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

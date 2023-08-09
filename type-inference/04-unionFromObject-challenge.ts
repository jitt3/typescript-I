//create an object with the following shape:
const awesomeObject = {
  react: {id: 1},
  vue: {id: 2},
  angular: {id: -3},
}
//using typescript's utility types
//return the object's keys as a union
//the above should return the following type:
type awesomeObjectKeys = 'react' | 'vue' | 'angular'

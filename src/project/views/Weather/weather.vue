<template>
  <div>
      <Button type="info" @click="getWeather">获取天气</Button>
         <pre style="background-color:rgba(0,0,0,.8);color:white;border-radius:3px;max-height:400px;overflow:auto">
{{weather}}
        </pre>
  </div>
</template>

<script>
export default {
    data () {
        return {
            weather: {}
        }
    },
    methods: {
        getWeather () {
            fetch('https://sapi.k780.com/?app=weather.realtime&weaid=1&ag=today&appkey=47786&sign=bcd5d8c75ea1d1d42a5d8c826438f121&format=json')
            .then(Response => {
                if (Response) {
                    return Response.json()
                }
            })
            .then(json => {
                this.weather = json.result

            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
// 测试
            })
        }
    },
    created () {
     this.getWeather()
    }
}
</script>

<style>

</style>
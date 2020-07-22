<template>
    <div id="slide_one">
        <div class="topContent">
            
            <div class="topL">
                <h3>{{name}}, {{country}}</h3>
                <p v-for="(value, i) in weather" v-bind:key="i">{{value.main}}, {{value.desc}}</p>
                <h6 v-for="(value, i) in main" v-bind:key="i"><span>humidity:</span> {{value.humidity}}%</h6>
                <h6 v-for="(value, i) in main" v-bind:key="i"><span>pressure:</span> {{value.pressure}} mm</h6>
                <h6 v-for="(value, i) in wind" v-bind:key="i"><span>wind:</span>  {{value.speed}} m/s</h6>
            </div>

            <div class="topR">
                <p>{{getDateUpd()}}</p>
                <h1 v-for="(value, i) in main" v-bind:key="i">{{value.temp}}</h1>
                <span>℃</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'main.vue',
    data() {
        return{
            titleTable: [
                {title: 'title-1'},
                {title: 'title-2'},
                {title: 'title-3'},
            ],
            weather: [{
                main: "Drizzle",
                desc: "light intensity drizzle",
                }],

            main: [{
                temp: 18,
                pressure: 760,
                humidity: 81,
            }],

            wind: [{
                speed: 4.1,
            }],

            updated: 1485789600,
            country: "GB",
            name: "London",

            monthsTable: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],

            daysTable: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],

        }
    },
    methods: {
        getDateUpd() {
			var date = new Date(this.updated * 1000);
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var year = date.getFullYear();
            var month = this.monthsTable[date.getMonth()];
			var week = this.daysTable[date.getDay()];
            var day = date.getDate();

			var formattedTime = 'updated: ' + week + ', ' + day + ' ' + month + ' ' + year + ', ' + hours + ':' + minutes.substr(-2);
			return formattedTime;
		}
    }
}
</script>


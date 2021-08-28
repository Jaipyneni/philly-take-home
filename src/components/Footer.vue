<template>
    <div>
        <div class="columns">
            <div class="column card location-card-border">
                <div class="location-card">
                    <p> <strong>Address</strong></p>
                    <p>{{address.address_1}}</p>
                    <p>{{address.address_2}}</p>
                    <p>{{address.city}} &nbsp; {{address.state}} &nbsp; {{address.zip}}</p>
                </div>
            </div>
            <div class="column card location-card-border">
                <div class="location-card">
                    <p> <strong>Hours</strong></p>
                    <p v-if="hours.monday">Monday: {{hours.monday.start_time}} - {{hours.monday.end_time}}</p>
                </div>

            </div>
            <div class="column card">
                <div class="location-card">
                    <p> <strong>Contact</strong></p>
                    <p>{{contact.email}}</p>
                    <p>{{contact.phone}}</p>
                </div>

            </div>
        </div>

        <ul v-if="errors && errors.length">
            <li v-for="(error, index) of errors" :key="index">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'LocationInfo',
        data() {
            return {
                address: {},
                contact: {},
                hours: {},
                errors: []
            }
        },

        created() {
            axios.get(`http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/locations/v1/connect`)
                .then(response => {
                    this.address = response.data.address;
                    this.contact = response.data.contact;
                    this.hours = response.data.hours;
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style scoped>

    @media (min-width:768px) {
        .location-card {
            text-align: left;
            padding-left: 30px;
        }
    }

    @media (max-width:768px) {
        .location-card {
            text-align: left;
            padding-left: 15px;
        }
    }


    @media (min-width:768px) {
        .location-card-border {
            border-right-style: solid;
            border-right-width: thin;
        }
    }

    @media (max-width:768px) {
        .location-card-border {
            border-bottom-style: solid;
            border-bottom-width: thin;
        }
    }


    .card {
        border-radius: 0;
        box-shadow: none;
    }

    @media (min-width:768px) {
        .column {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            padding-right: 0.25rem;
            padding-left: 0.25rem;
        }
    }

    @media (max-width:768px) {
        .column {
            padding-top: 0.60rem;
            padding-bottom: 0.60rem;
            padding-right: 0.25rem;
            padding-left: 0.25rem;
        }
    }



    .columns {
        margin: 20px;
    }

</style>
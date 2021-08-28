<template>
    <div>
        <div class="columns">
            <div class="column card location-card-border">
                <div class="location-card">
                    <p> <strong>Address</strong></p>
                    <p>{{address.address_1}}</p>
                    <p>{{address.address_2}}</p>
                    <p>{{address.city}} &nbsp; {{address.state}} &nbsp; {{address.zip}}</p>
                    <a href="{{address.map_url}}">Map</a>
                </div>
            </div>
            <div class="column card location-card-border">
                <div class="location-card">
                    <p> <strong>Hours</strong></p>
                    <p> Closed today</p>
                    <p> &nbsp;</p>
                    <a href="#"> See all hours </a>
                </div>

            </div>
            <div class="column card">
                <div class="location-card">
                    <p> <strong>Contact</strong></p>
                    <a href="mailto:{{contact.email}}">{{contact.email}}</a> <br/>
                    <a href="tel:{{contact.phone}}">{{formatPhoneNumber(contact.phone)}}</a> <br/>

                    <a href="{{contact.facebook}}"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" /></a>
                    <a href="{{contact.twitter}}"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
                    <a href="{{contact.insta}}"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" /></a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'LocationInfo',
        methods: {
            formatPhoneNumber: function(phoneNumberString) {
                var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
                var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
                if (match) {

                    return ['(', match[2], ') ', match[3], '-', match[4]].join('');
                }
                return null;
            }
        },
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
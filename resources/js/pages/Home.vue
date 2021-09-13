<template>
    <layout>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 mt-5">
                <div class="card">
                    <div>Olá {{ user }}</div>
                </div>
            </div>
        </div>
    </div>
    </layout>
</template>

<script>
    import Layout from '../Layout.vue'
    export default {
        props: {
            user: String
        },
        mounted() {
            console.log('Component mounted.')
        },
        components: { Layout }
    }
</script>

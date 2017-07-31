<template>
    <div>
        <headtop></headtop>
        <router-view></router-view>
    </div>
</template>

<script>
    import headtop from '../../components/head.vue'
    export default {
        data() {
            return {}
        },
        components: {
            headtop
        }
    }
</script>
<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
// import AppNavigation from '../components/AppNavigation';
import HomeHero from '@/components/HomeHero'
import HomeDetails from '@/components/HomeDetails'
import HomePlans from '@/components/HomePlans'

export default {
    name: 'home',
    components: {
        // AppNavigation, 
        HomeHero, 
        HomeDetails, 
        HomePlans
    }
};
</script>

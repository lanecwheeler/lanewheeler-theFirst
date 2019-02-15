<template>
    <div>
        <about-me></about-me>
        <!-- <meal-recipes></meal-recipes> -->
    </div>
</template>

<script>
import AboutMe from '@/components/AboutMe'
import MealRecipes from '@/components/MealRecipes';

export default {
    name: 'Menu',
    components: {
        AboutMe, 
        MealRecipes
    }
};
</script>

<style scoped>
</style>
<template>
    <span class="go-back">

        <button @click="$router.back()">Go Back</button>

    </span>


</template>


<style>
.go-back {
    position: fixed; 
    left: 80px;
    z-index: 1000;
}

</style>
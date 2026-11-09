<template>

<div id="nav" class="navbar">

  <div id="navlinks" class="navlinks">

    <router-link to="/about">About</router-link>
    
    <router-link to="/">Random Quotes</router-link>
    
    <router-link to="/contact">Contact</router-link>

  </div>
</div>

</template>

<style lang="css">

#nav .m11-active-link {
  color: #F59E0B; 
}

.navbar {
  background-color: #455ecc;
  padding: 20px 0;
  margin: 0;
}

.navlinks {
  display: flex;
  justify-content: center;
  align-items: center; 
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 18px;
  gap: 20px;
}

.navlinks a {
  color:white;
  display: inline-block;
  text-decoration: none;
}
</style>
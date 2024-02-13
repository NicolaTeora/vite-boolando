<script>
export default{}
</script>

<template>
    <div class="overlay">
        <div class="card-details">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .overlay{
        
        position: fixed;
        //display: block;
        width: 100%; 
        height: 100%; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        .card-details{
            width: 100px;
            height: 100px;
            background-color: whitesmoke;
        } 
    }
    
</style>
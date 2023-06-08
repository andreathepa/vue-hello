const {createApp} = Vue;

createApp({
    data() {
      return{
        
        text: '<h1>Ciao Vue benvenuto</h1>',

        text_2: '<h1>Ciao Vue addio</h1>',

        image: '<img src="https://picsum.photos/200/300" alt="">',



      }
    },
    
  }).mount('#app');
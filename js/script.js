const {createApp} = Vue;

createApp({
    data() {
      return{
        
        text: '<h1>Ciao Vue benvenuto</h1>',

        text_2: '<h1>Ciao Vue addio</h1>',

        image: 'https://picsum.photos/200/300',

        immagine: ''


      }
    },
    methods:{
        start(){
            let number = Math.floor(Math.random() * 200);

            let random_img = `<img src="https://picsum.photos/id/${number}/390/300" alt="image">`;
            
            this.immagine= random_img

        }
        
    }
  }).mount('#app');
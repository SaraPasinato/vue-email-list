/**
 * TODO:
* Descrizione:
** Attraverso l'apposita API di Boolean
** https://flynn.boolean.careers/exercises/api/random/mail
** generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
* TODO: Bonus
** Far comparire gli indirizzi email solamente quando sono stati tutti generati.*
 */

Vue.config.devtools = true;



var app = new Vue({
  el: '#app',
  data: {
   emailLists:[],
   lengthLists:10,
  },
  methods:{
    getEmail(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
        this.emailLists.push(res.data.response);
      }) .catch((error) => {
        // stampa error in console
        console.log(error);
      })
      .then(() => {
       // stampa in ogni caso questa sezione!
       console.log('Termine funzione getEmail')
      });;
    }
  },
  created(){
    for(let i=0; i<this.lengthLists; i++){
      this.getEmail();
    }
  }
})
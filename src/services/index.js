import axios from 'axios'

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

let Igraci = {
    async getdota(f){
     let response = await Service.get(`/igraci?game=dota${f}`)
     let data = response.data

     data = data.map(doc => {
        return {
          username: doc.username, 
          dotagameid: doc.dotagameid, 
          dotapos: doc.dotapos,
          dotarank: doc.dotarank, 
          dotaregija: doc.dotaregija
        };
             });
            return data
    },
    async getcsgo(f){
      let response = await Service.get(`/igraci?game=csgo${f}`)
      let data = response.data
 
      data = data.map(doc => {
         return {
           username: doc.username, 
           csgogameid: doc.csgogameid, 
           csgopos: doc.csgopos,
           csgorank: doc.csgorank, 
           csgoregija: doc.csgoregija
         };
              });
             return data
     },
     async getlol(f){
      let response = await Service.get(`/igraci?game=lol${f}`)
      let data = response.data
 
      data = data.map(doc => {
         return {
           username: doc.username, 
           lolgameid: doc.lolgameid, 
           lolpos: doc.lolpos,
           lolrank: doc.lolrank, 
           lolregija: doc.lolregija
         };
              });
             return data
     }
}


let Chat = {
  async getdotachat(){
   let response = await Service.get(`/chat?game=dota`)
   let data = response.data

   data = data.map(doc => {
      return {
        author: doc.author, 
        createdAt: doc.createdAt, 
        message: doc.message
      };
           });
          return data
  },
  async getcsgochat(){
    let response = await Service.get(`/chat?game=csgo`)
    let data = response.data

    data = data.map(doc => {
       return {
        author: doc.author, 
        createdAt: doc.createdAt, 
        message: doc.message
       };
            });
           return data
   },
   async getlolchat(){
    let response = await Service.get(`/chat?game=lol`)
    let data = response.data

    data = data.map(doc => {
       return {
        author: doc.author, 
        createdAt: doc.createdAt, 
        message: doc.message
       };
            });
           return data
   }
}


export { Service, Igraci, Chat }
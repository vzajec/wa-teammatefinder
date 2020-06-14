import axios from 'axios'
import $router from '@/router'; 

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

Service.interceptors.request.use((request) => {
  try {
  request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
  } catch (e) {
  console.error(e);
  }
  return request;
 });
 

 Service.interceptors.response.use(
  (response) => {
    console.log('Interceptor', response);
    return response;
    },
    (error) => {
    if (error.response.status == 401) {
    Auth.logout();
    $router.go();
    }
    }
   );

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
   },

    add(newmsg) {
    return Service.post('/chat', newmsg)
}

}



let Pozivi = {
  async getpozivi(){
  let to = Auth.getUser().username
   let response = await Service.get(`/pozivi?to=${to}`);
   let data = response.data


   data = data.map(doc => {
      return {
        from: doc.from, 
        createdAt: doc.createdAt, 
        to: doc.to,
        game: doc.game, 
      };
           });
          return data
  }
}


let Register = {
  async register(username, password) {
  let response = await Service.post('/user', {
  username,
  password,
  });

}
   };



let PostaviP = {
  async pp(data) {
    let response = await Service.post('/profilp', {data});
    },
}


let Auth = {
  // primamo user/pass, šaljemo upit na backend i ako dobijemo token
  // spremimao ga u "localStorage" - JavaScript memoriju koja OSTAJE
  // i nakon što zatvorimo preglednik ili osvježimo stranicu
  async login(username, password) {
  let response = await Service.post('/auth', {
  username,
  password,
  });
  let user = response.data;
  // localStorage može sačuvati samo string, boolean ili number
  // pa moramo pretvoriti objekt u string (JSON je string)
  localStorage.setItem('user', JSON.stringify(user));
  },
  // logout znači brisanje tokena
  logout() {
  localStorage.removeItem('user');
  },
  // dohvat tokena
  getToken() {
  let user = Auth.getUser();
  if (user && user.token) {
  return user.token;
  }
  },
  // dohvat spremljenog korisnika
  getUser() {
  return JSON.parse(localStorage.getItem('user'));
  },
  // provjera jesmo li autentificirani
  authenticated() {
  let user = Auth.getUser();
  if (user && user.username) {
  return true;
  }
  return false;
  },
  state: {
    get user() {
    return Auth.getUser();
    },
    get name() {
      return Auth.getUser().name;
      },
    get username() {
      return Auth.getUser().username;
      },
    get authenticated() {
    return Auth.authenticated();
    },
    },
   };


let Profil = {

   async profil(id) {
    let response = await Service.get(`/profil/${id}`);

    let doc = response.data;

    return {
        id: doc._id,
        username: doc.username,
        email: doc.email,
        lolgameid: doc.lolgameid,
        lolpos: doc.lolpos,
        lolrank: doc.lolrank,
        lolregija: doc.lolregija,
        dota: doc.dota,
        lol: doc.lol,
        csgo: doc.lol,
        lolteams: doc.lolteams
        
    };
},

}


export { Service, Igraci, Chat, Pozivi, Auth, Register, Profil, PostaviP}
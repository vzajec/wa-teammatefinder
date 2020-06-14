<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="chatApp">
<div class="messaging">
      <div class="inbox_msg">
        
        <div class="mesgs" v-if="dotaChat">
          <div class="msg_history">
            <div :key="messagedota.id" v-for="messagedota in messagesdota" class="incoming_msg">
              <div :class="[messagedota.author==authUser.email?'sent_msg':'received_msg']">
                <div class="received_withd_msg">
                  <p>{{messagedota.message}}</p>
                  <span class="time_date">{{messagedota.author}}</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <form @submit.prevent="saveMessageDota" class="input_msg_write">
              <input v-model="messagedota" type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
        <div class="mesgs" v-if="csgoChat">
          <div class="msg_history">
            <div :key="messagecsgo.id" v-for="messagecsgo in messagescsgo" class="incoming_msg">
              <div :class="[messagecsgo.author==authUser.email?'sent_msg':'received_msg']">
                <div class="received_withd_msg">
                  <p>{{messagecsgo.message}}</p>
                  <span class="time_date">{{messagecsgo.author}}</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <form @submit.prevent="saveMessageCsgo" class="input_msg_write">
              <input v-model="messagecsgo" type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
        <div class="mesgs" v-if="lolChat">
          <div class="msg_history">
            <div :key="messagelol.id" v-for="messagelol in messageslol" class="incoming_msg">
              <div :class="[messagelol.author==authUser.email?'sent_msg':'received_msg']">
                <div class="received_withd_msg">
                  <p>{{messagelol.message}}</p>
                  <span class="time_date">{{messagelol.author}}</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <form @submit.prevent="saveMessageLol" class="input_msg_write">
              <input v-model="messagelol" type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
        <div class="inbox_people">
          
          <div class="inbox_chat">
            <div class="chat_list" @click="showDotaChat">
              
              <div class="chat_people">
                <div class="chat_ib">
                  <div class="inboxIcon"><i class="" aria-hidden="true"></i></div>
                  <h5>DOTA 2 Chat</h5>
                  <div class="chat_img"> <img src="https://www.bettingsite.org/wp-content/uploads/2018/06/Dota-2-Logo.png" alt="sunil"> </div>
                </div>
              </div>
            </div>
            <div class="chat_list" @click="showCsgoChat">
              <div class="chat_people">
                <div class="chat_ib">
                  <div class="inboxIcon"><i class="" aria-hidden="true"></i></div>
                  <h5>CS:GO Chat </h5>
                  <div class="chat_img"> <img src="https://itsdcdn.com/resources/services/logowide/340/201809161826/counter-strike-csgo.png" alt="sunil"> </div>
                </div>
              </div>
            </div>
            <div class="chat_list" @click="showLolChat">
              
              <div class="chat_people">
                <div class="chat_ib">
                  <div class="inboxIcon"><i class="" aria-hidden="true"></i></div>
                  <h5>Lol Chat</h5>
                  <div class="chat_img"> <img src="https://www.destinyusa.com/wp-content/uploads/sites/7/2019/04/League-of-Legends-Logo-Transparent-Background.png" alt="sunil"> </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div></div>
</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import { Chat } from '@/services'
import store from '@/store.js'

export default {
  name: 'PrivateChat',
  data(){
     return store

  },
  methods: {
        showDotaChat(){
          this.dotaChat = true,
          this.csgoChat = false,
          this.lolChat = false;
        },
        showCsgoChat(){
          this.csgoChat = true,
          this.dotaChat = false,
          this.lolChat = false;
        },
        showLolChat(){
          this.lolChat = true,
          this.dotaChat = false,
          this.csgoChat = false;
          
        },
        scrollToBottom(){
          let box = document.querySelector('.msg_history');
          box.scrollTop=box.scrollHeight;
        },
        async saveMessageDota() {
                
                let addmsg = {
                    message: this.messagedota,
                    author: this.authUser.email,
                    createdAt: new Date(),
                    game: "dota"
                }
                let newmsg = await Chat.add(addmsg)
                .then(()=>{
                  this.scrollToBottom();
                })
                
                this.messagedota=null;
        },
       async saveMessageCsgo() {
                
               let addmsg = {
                    message: this.messagecsgo,
                    author: this.authUser.email,
                    createdAt: new Date(),
                    game: "csgo"
                }
                let newmsg = await Chat.add(addmsg)
                .then(()=>{
                  this.scrollToBottom();
                })
                
                this.messagecsgo=null;
        },
       async saveMessageLol() {
                
                let addmsg = {
                    message: this.messagelol,
                    author: this.authUser.email,
                    createdAt: new Date(),
                    game: "lol"
                }
                let newmsg = await Chat.add(addmsg)
                .then(()=>{
                  this.scrollToBottom();
                })
                
                this.messagelol=null;
        },
        async fetchMessagesDota(){
                this.messagesdota = await Chat.getdotachat()
                setTimeout(()=>{
                  this.scrollToBottom();
                },1000);
        },
        async fetchMessagesCsgo(){
                this.messagescsgo = await Chat.getcsgochat()
                setTimeout(()=>{
                  this.scrollToBottom();
                },1000);
        },
        async fetchMessagesLol(){
                this.messageslol = await Chat.getlolchat()
                setTimeout(()=>{
                  this.scrollToBottom();
                },1000);
        }
    },
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.authUser=user;
            }else{
                this.authUser={}
            }
        })
        this.fetchMessagesDota();
        this.fetchMessagesCsgo();
        this.fetchMessagesLol();
    },
  

  components: {
    navnside
  }
}


</script>



<style scoped="">
/* Html i Css preuzeti sa https://bootsnipp.com/snippets/1ea0N , html prilagoden kako nama odgovara*/
.container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}

.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  
  width: 100%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  margin-right: 0px;
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: left;
  width: 92%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
.btn-group{
margin-top:5px;
padding:10px;
margin-right:50px;
}
</style>
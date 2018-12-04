import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('usuario') email;
  @ViewChild('senha') password;


  constructor(public navCtrl: NavController, public toastCtrl : ToastController, public firebaseauht : AngularFireAuth,public storageService : StorageService) {

  }

  login(){
    this.firebaseauht.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(()=>{
      this.mensagem('login correto')
    })
    .catch((erro: any)=>{
      this.mensagem('login incorreto')
    });
    }
    cadastro(){
      this.firebaseauht.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(()=>{
        this.mensagem('cadastro correto')
      })
      .catch((erro: any)=>{
        this.mensagem('cadastro incorreto')
      });
      }
      
  mensagem(texto : string){
  let msg = this.toastCtrl.create({
    duration : 1000,
    position : 'botton'
  })
  msg.setMessage(texto);
  msg.present();
}



}

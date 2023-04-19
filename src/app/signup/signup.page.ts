import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {  AngularFireAuth} from '@angular/fire/compat/auth'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {


  email="";
  password="";

  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  async signup(){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      console.log(result)
    }
    catch(error){
      console.log(error);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  private loading: any;

  constructor(
    public loadingController: LoadingController,
    public afAuth: AngularFireAuth,
    private authService: AuthService,
    private toastCtrl: ToastController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>{
      this.router.navigate(['home']);
    })
  }
  logoutGoogle() {
    this.afAuth.signOut();
  }


  // logar(){
  //   this.afAuth.signInWithEmailAndPassword(this.userLogin)
  // }

  async logar() {
    await this.presentLoading();
    try {
      await this.authService.login(this.userLogin);
    } catch (error) {

      let message: string;
      switch (error.code) {
        case 'auth/wrong-password':
          message = 'Email ou Senha incorretos.';
          break;

        case 'auth/user-not-found':
          message = 'E-mail não cadastrado.';
          break;
      }

      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['home']);
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cadastrando...',
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000
    });
    toast.present();
  }

}

// import { Component, OnInit } from '@angular/core';
// import { LoadingController } from '@ionic/angular';
// import { User } from 'src/app/interface/user';
// import { AuthService } from '../../services/auth.service';
// import { AngularFireAuth } from '@angular/fire/auth';


// @Component({
//   selector: 'app-cadastrar',
//   templateUrl: './cadastrar.page.html',
//   styleUrls: ['./cadastrar.page.scss'],
// })
// export class CadastrarPage implements OnInit {
//   public userRegister: User = {};
//   private loading: any;

//   constructor(
//     public loadingController: LoadingController,
//     public afAuth: AngularFireAuth,
//     private authService: AuthService,
//   ) { }

//   ngOnInit() {
//   }

//   async cadastrar() {
//     await this.presentLoading();
//     try {
//       await this.authService.register(this.userRegister);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       this.loading.dismiss();
//     }
//   }

//   async presentLoading() {
//     this.loading = await this.loadingController.create({
//       cssClass: 'my-custom-class',
//       message: 'Cadastrando...',
//     });
//     return this.loading.present();
//   }
// }

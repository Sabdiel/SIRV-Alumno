import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoRoutingModule } from './segundo-routing.module';
import { SegundoComponent } from './segundo.component';

import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [SegundoComponent],
  imports: [
    CommonModule,
    SegundoRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ]
})
export class SegundoModule { }

import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  public user: User;

  constructor(public afAuth: AngularFireAuth,private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
   }

   listaItem(){
     return this.items;
   }

  async login(email:string, password:string){

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;

    } catch (error) {
      console.log(error);
    }
  }
  async register(email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout(){
    try {
    await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

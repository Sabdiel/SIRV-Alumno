import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit {

  items:any;

  constructor(firestore: AngularFirestore,private conexion:AuthService) {
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    })
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
  }

}

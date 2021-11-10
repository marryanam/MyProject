import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PeriodicElement } from '../models/userData';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db } from '../app.module'
import * as file from './data.json'

@Injectable({
  providedIn: 'root'
})

export class UserAddService {

  bSubject = new BehaviorSubject("");
  items:any;
  fff:any;

  constructor(
  //  private db: AngularFireDatabase,
    public firestore: AngularFirestore,
  ) {
    this.getCities(db);
  }

  getMessages(): Observable<any> {
    this.items = this.firestore.collection('playground-marry-default-rtdb');
    console.log(this.items.valueChanges(), this.items.valueChanges())
    return this.items.valueChanges();
  }

  async getCities(db: any) {
    const querySnapshot = await getDocs(collection(db, "userData"));
    querySnapshot.forEach((doc) => {
      this.fff = doc.data();
      this.bSubject.next(this.fff);
      // doc.forEach((element:any) => {
      //   console.log(`${element} => data`);
      // });
      // console.log(doc.data(), 'doc')
      console.log(`${doc.id} => ${doc.data()[0].name}`);
    });

    // try {
    //   const docRef = await addDoc(collection(db, "userData"), { ...file});
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }
}

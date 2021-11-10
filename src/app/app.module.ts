import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebase } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Index1Component } from './pages/index1/index1.component';
import { Index2Component } from './pages/index2/index2.component';
import { Index3Component } from './pages/index3/index3.component';
import { Index4Component } from './pages/index4/index4.component';
import { Index5Component } from './pages/index5/index5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const firebaseConfig = {
  apiKey: "AIzaSyCpHaLwtZUB7FuAEQm2eENvpeZwfFrNKkw",
  authDomain: "playground-marry.firebaseapp.com",
  projectId: "playground-marry",
  storageBucket: "playground-marry.appspot.com",
  messagingSenderId: "933151292310",
  appId: "1:933151292310:web:0afa01eb7f1d01e4fffbb7",
  measurementId: "G-HZK4XK5R10"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// async function getCities(db:any) {
//   const querySnapshot = await getDocs(collection(db, "playground-marry-default-rtdb"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc} uuu`);
//     console.log(`${doc.id} => ${doc.data().born}`);
//   });

//   try {
//     const docRef = await addDoc(collection(db, "users21"), {
//       first: "Ad222a",
//       last: "Lovelac22e",
//       born: 1812115
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
// getCities(db);

@NgModule({
  declarations: [
    AppComponent,
    Index1Component,
    Index2Component,
    Index3Component,
    Index4Component,
    Index5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(firebase.firebase, 'three.js'),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

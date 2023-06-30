import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url: any = 'https://user-angular-firebase-default-rtdb.firebaseio.com/users.json'
  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(){
    return this.http.get(this.url)
  }
  fetchWinner(){
    return this.http.get('https://user-angular-firebase-default-rtdb.firebaseio.com/winners.json')
  }
}

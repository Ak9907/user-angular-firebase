import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ConfirmModelComponent } from './confirm-model/confirm-model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-angular-firebase';
  reqbtns: any;
  selectedBtn: number = 0;
  userData: any;
  winners: any;
  byScore: any;

  url: any = 'https://user-angular-firebase-default-rtdb.firebaseio.com/users'

  constructor(
    public database: Database,
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private matDialog: MatDialog,
  ) {

  }
  ngOnInit(): void {
    //this.onClickSubmit();
    this.userService.fetchUsers().subscribe((res: any) => {
      const data = JSON.stringify(res);
      this.userData = JSON.parse(data);
      console.log(data);
      console.log(this.userData)

    })

  }
  // addToWinners(winner: any, index:any) {
  //   let count = 0;
  //   set(ref(this.database, 'winners/'+ count), {
  //     name: winner.name,
  //     age: winner.age,
  //     score: winner.score

  //   });

  // }

  active(idx: number) {
    this.selectedBtn = idx;
    if (idx == 1) {
      this.fetchWinnerList();
    }
  }

  fetchWinnerList() {
    this.userService.fetchWinner().subscribe((response: any) => {
      const data = JSON.stringify(response);
      this.winners = JSON.parse(data)
      console.log(this.winners)
      // var allUsers = [];

      // // Populate users array
      // for(var key in  this.winners) {
      //     allUsers.push( this.winners[key]);
      // }
      // console.log("winners", allUsers);
    })
    // onClickSubmit(value:any){
    //   set(ref(this.database, 'users/' + 0), {
    //     name: value.username,
    //     age: value.age,
    //     score:value.score

    //   });



  }
  onSort() {
    this.byScore = this.userData.slice(0);
    this.byScore.sort(function (a: any, b: any) {
      return a.score - b.score;
    });
    return this.userData = this.byScore;
  }

  openDialog(winnerData: any) {
    const dialogRef = this.matDialog.open(ConfirmModelComponent, {
      width: "440px",
      height: "15rem",
      data: winnerData
    });
  }
  //   const starCountRef = ref(this.database, 'users/');
  //   onValue(starCountRef, (snapshot:any) => {
  //   var data = snapshot.val();
  //   console.log(data)
  //   this.userData = data;
  // });
  // return this.userData;
  // }
}
function ConfirmmodalComponent(ConfirmmodalComponent: any, arg1: { width: string; data: string; }) {
  throw new Error('Function not implemented.');
}


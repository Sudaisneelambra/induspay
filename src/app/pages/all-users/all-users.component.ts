import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  users !:User[];

  constructor(private commonService:CommonService,private router:Router){}

  ngOnInit(){
    this.getAllUsers()
  }


  /**getting all users using api from service */
  getAllUsers(){
    this.commonService.getAllUsers().subscribe({
      next:(res)=>{
        this.users = res;    
        console.log(this.users);
        
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

  /**edit user */
  editUser(user: any) {
      this.router.navigate(['contact-form'],{ queryParams: user })
  }

  /**delete user */
  deleteUser(user: any) {
    const confim =confirm('are you confirm to delete this user')

    if(confim){
      this.commonService.deleteuser(user?.id).subscribe({
        next:(res)=>{
          console.log(res);   
          this.getAllUsers()     
        },
        error:(err)=>{
          console.log(err);
        }
      })
     
    }
  }

  /**back to home */
  backToHome(){
    this.router.navigate([''])
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder ,private commonService:CommonService, private router:Router,private rout:ActivatedRoute) {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      pan_no: ['', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
      adhaar_no: ['', [Validators.required, Validators.pattern("^[0-9]{12}$")]]
    });
  }

  data:any



  ngOnInit(){

    /**cheking have there params */
    this.rout.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.data = params;
        console.log('Params:', params);
        console.log('Data:', this.data);
        if (this.data) {
          this.userForm.patchValue({
            first_name: this.data['first_name'],
            last_name: this.data['last_name'],
            emailId: this.data['emailId'],
            age: this.data['age'],
            gender: this.data['gender'],
            mobilenumber: this.data['mobilenumber'],
            pan_no: this.data['pan_no'],
            adhaar_no: this.data['adhaar_no']
          });
        }
      }
    });
  }


  /**submission of edit and  first data */
  onSubmit() {
   if(this.data){
        if (this.userForm.valid) {
          console.log(this.userForm.value);
          const formattedDate = this.formatDate(new Date());
          const data= {...this.userForm.value,status:true,createdAt:formattedDate}
          this.commonService.edituser(this.data?.id,data).subscribe({
            next:(res)=>{
              console.log(res);   
              alert('user edited success fully')   
              this.router.navigate(['all-users'])       
            },
            error:(err)=>{
              console.log(err);
              alert('user added failed')
            }
          })
          
        } else {
          console.log("Form is not valid!");
        }
    } else{
        if (this.userForm.valid) {
          console.log(this.userForm.value);
          const formattedDate = this.formatDate(new Date());
          const data= {...this.userForm.value,status:true,createdAt:formattedDate}
          this.commonService.addUser(data).subscribe({
            next:(res)=>{
              console.log(res);   
              alert('user added success fully')
              this.router.navigate(['all-users'])       
            },
            error:(err)=>{
              console.log(err);
              alert('user added failed')
            }
          })
          
        } else {
          console.log("Form is not valid!");
        }
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    
    return `${year}-${month}-${day}`;
  }

  goToAllUsers(){
    this.router.navigate(['all-users'])
  }
}

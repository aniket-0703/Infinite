import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../../core/admin/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  memberForm: FormGroup;

  constructor(private fb:FormBuilder, private userService:UserService, private toastr:ToastrService){
    this.memberForm =this.fb.group({
      memberName:['',Validators.required],
      memberLastName:['',Validators.required],
      memberId:['',Validators.required],
      memberPinLevel:['',Validators.required],
      memberIncharge:['',Validators.required],
      memberTeam:['',Validators.required],
      memberEmail:['',Validators.required],
      memberNumber:['',Validators.required],
      memberGst:['',Validators.required],
      memberSpouseName:['',Validators.required],
      memberAddress1:['',Validators.required],
      memberAddress2:['',Validators.required],
      memberCity:['',Validators.required],
      memberState:['',Validators.required],
      memberCountry:['',Validators.required],
      memberZipCode:['',Validators.required],
    })
  }
  onSubmit() {
    if (this.memberForm.valid) {
      this.userService.createMember(this.memberForm.value).subscribe(response => {
        this.toastr.success('User Added successfully!', 'Success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-right',
        });
        console.log('Event created', response);
        // this.eventForm.reset();
        // this.resetPinLevels();
      });
    } else {
      this.toastr.error('Failed to create event. Please try again.', 'Error');

      console.log('Form is invalid');
    }
  }
}

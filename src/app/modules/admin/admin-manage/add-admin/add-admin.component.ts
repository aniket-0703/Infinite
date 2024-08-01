import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../core/admin/user.service';
import { AdminService } from '../../../../core/admin/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {
  adminForm: FormGroup;

  constructor(private fb:FormBuilder, private adminService:AdminService, private toastr:ToastrService){
    this.adminForm =this.fb.group({
      adminName:['',Validators.required],
      adminID:['',Validators.required],
      adminEmail:['',Validators.required],
      adminNumber:['',Validators.required],
    })
  }
  onSubmit() {
    if (this.adminForm.valid) {
      this.adminService.createAdmin(this.adminForm.value).subscribe(response => {
        this.toastr.success('Admin Added successfully!', 'Success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-right',
        });
        console.log('Event created', response);
        this.adminForm.reset();
        // this.resetPinLevels();
      });
    } else {
      this.toastr.error('Failed to create event. Please try again.', 'Error');

      console.log('Form is invalid');
    }
  }
}

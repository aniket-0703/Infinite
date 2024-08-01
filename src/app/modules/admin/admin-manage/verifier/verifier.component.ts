import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../core/admin/user.service';
import { VerifierService } from '../../../../core/admin/verifier.service';

@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrl: './verifier.component.css'
})
export class VerifierComponent {
  verifierForm: FormGroup;

  constructor(private fb:FormBuilder, private userService:VerifierService, private toastr:ToastrService){
    this.verifierForm =this.fb.group({
      verifierName:['',Validators.required],
      verifierId:['',Validators.required],
      verifierEmail:['',Validators.required],
      verifierNumber:['',Validators.required],
      verifierLocation:['',Validators.required],
      verifierPinLevel:['',Validators.required],
     
    })
  }
  onSubmit() {
    if (this.verifierForm.valid) {
      this.userService.createVerifier(this.verifierForm.value).subscribe(response => {
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

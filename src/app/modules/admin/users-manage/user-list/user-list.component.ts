import { Component } from '@angular/core';
import { UserService } from '../../../../core/admin/user.service';
import { Router } from '@angular/router';
import { VerifierService } from '../../../../core/admin/verifier.service';
interface User {
  id: string;
  userName: string;
  location: string;
  pinLevel: string;
  status: boolean;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  memberData: any;
  verifierData: any;
  selectedTab: string = 'member';

  // members: User[] = [
  //   {id: '#2001', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Manager', status: true},
  //   {id: '#2002', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Senior Manager', status: true},
  //   {id: '#2003', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Manager', status: true},
  //   {id: '#2004', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Senior Manager', status: true},
  //   {id: '#2005', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Manager', status: true},
  //   {id: '#2006', userName: 'A.Aadharsh', location: 'Chennai', pinLevel: 'Senior Manager', status: true},
  // ];

  // verifiers: User[] = [
  //   { id: '#3001', userName: 'B.Bharath', location: 'Mumbai', pinLevel: 'Verifier', status: true },
  //   { id: '#3002', userName: 'C.Chandan', location: 'Delhi', pinLevel: 'Senior Verifier', status: false },
  //   { id: '#3003', userName: 'B.Bharath', location: 'Mumbai', pinLevel: 'Verifier', status: true },
  //   { id: '#3004', userName: 'C.Chandan', location: 'Delhi', pinLevel: 'Senior Verifier', status: false },
  //   { id: '#3005', userName: 'B.Bharath', location: 'Mumbai', pinLevel: 'Verifier', status: true },
  //   { id: '#3006', userName: 'C.Chandan', location: 'Delhi', pinLevel: 'Senior Verifier', status: false },
  //   { id: '#3003', userName: 'B.Bharath', location: 'Mumbai', pinLevel: 'Verifier', status: true },
  //   { id: '#3004', userName: 'C.Chandan', location: 'Delhi', pinLevel: 'Senior Verifier', status: false },
  //   { id: '#3005', userName: 'B.Bharath', location: 'Mumbai', pinLevel: 'Verifier', status: true },
  //   { id: '#3006', userName: 'C.Chandan', location: 'Delhi', pinLevel: 'Senior Verifier', status: false },
  // ];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }



  isToggled = false;


  toggleStatus() {
    this.isToggled = !this.isToggled;
    console.log('Toggle is now', this.isToggled ? 'ON' : 'OFF');
  }


  onToggleChange() {
    console.log('Toggle is now', this.isToggled ? 'ON' : 'OFF');
  }



  constructor(private userService: UserService, private verifierService: VerifierService, private router: Router) { }


  ngOnInit(): void {
    this.getUser(),
      this.getVerifier()

  }

  viewDetails(id: number): void {
    this.router.navigate(['/members', id]);

  }


  viewVerfierDetails(id: number): void {
    this.router.navigate(['/verifiers', id])
  }
  getUser() {
    this.userService.getMember().subscribe(
      data => {
        this.memberData = data;
        console.log(this.memberData);
      },
      error => {
        console.error('Error fetching event data', error);
      }
    );
  }


  getVerifier() {
    this.verifierService.getVerifier().subscribe(
      data => {
        this.verifierData = data;
        console.log(this.verifierData);
      },
      error => {
        console.error('Error fetching event data', error);
      }
    );
  }
}

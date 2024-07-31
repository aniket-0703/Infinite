import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../core/admin/user.service';

@Component({
  selector: 'app-deatils-page',
  templateUrl: './deatils-page.component.html',
  styleUrl: './deatils-page.component.css'
})
export class DeatilsPageComponent {
  memberData: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getEventById(id).subscribe(data => {
      this.memberData = data;
    });
  }
}

import { Component } from '@angular/core';
import { VerifierService } from '../../../../../../core/admin/verifier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verifier-detail-form',
  templateUrl: './verifier-detail-form.component.html',
  styleUrl: './verifier-detail-form.component.css'
})
export class VerifierDetailFormComponent {
  verifierData: any;

  constructor(
    private verifierService: VerifierService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.verifierService.getVerifierById(id).subscribe(data => {
      this.verifierData = data;
      console.log(this.verifierData)
    });
  }
}

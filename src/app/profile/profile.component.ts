import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  mock!: any;
  options!: string[];

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mock = this.activatedRoute.snapshot.data['mock'];
    this.options = ['Engineer', 'Manager'];
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  mock!: any;

  constructor(private readonly activatedRoute: ActivatedRoute) { }
  ngOnChanges() {
    console.log(this.activatedRoute.snapshot.data['mock'].role);
  }

  ngOnInit() {
    this.mock = this.activatedRoute.snapshot.data['mock'];
  }
}

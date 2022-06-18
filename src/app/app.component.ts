import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  treeSelection!: TreeNode;
  treeValue!: TreeNode[];
  mock!: any;

  constructor(private readonly router: Router) { }

  activate(component: any) {
    this.mock = component.activatedRoute.snapshot.data.mock;
  }

  ngOnInit() {
    this.treeValue = [
      {
        icon: "pi pi-home",
        label: 'My profile',
        key: 'profile',
      },
      {
        children: [
          {
            icon: "pi pi-chart-line",
            label: 'Engineer',
            key: 'Engineer'
          },
        ],
        expanded: true,
        icon: "pi pi-chart-line",
        label: 'Activities',
        key: 'activities'
      }
    ];
    this.treeSelection = this.treeValue[0];
  }

  onNodeSelect(node: TreeNode) {
    if (node.parent) {
      this.router.navigate(['activities', node.key]);
    } else {
      this.router.navigate(['profile', this.mock.role]);
    }
  }
}

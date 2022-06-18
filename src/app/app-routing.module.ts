import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockResolverService } from './services/mock.resolver';

const routes: Routes = [{
  children: [
    {
      loadChildren: () => import('../app/activities/activities.module').then(m => m.ActivitiesModule),
      path: 'activities/:role',
      resolve: { mock: MockResolverService }
    },
    {
      loadChildren: () => import('../app/profile/profile.module').then(m => m.ProfileModule),
      path: 'profile/:role',
      resolve: { mock: MockResolverService }
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'profile/Engineer'
    }
  ],
  path: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

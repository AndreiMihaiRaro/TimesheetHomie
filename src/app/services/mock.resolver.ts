import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as engineer from '../../assets/engineer.json';
import * as manager from '../../assets/manager.json';

@Injectable({ providedIn: 'root' })
export class MockResolverService {
    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
        switch (activatedRouteSnapshot.paramMap.get('role')) {
            case 'Engineer':
                return (engineer as any).default;
            case 'Manager':
                return (manager as any).default;
            default:
                break;
        }
    }
}
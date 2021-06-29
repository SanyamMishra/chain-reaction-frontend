import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private router: Router,
    private location: Location
  ) { }

  navigateBack(activatedRoute: ActivatedRoute) {
    if (window.history.length <= 2) {
      this.router.navigate(['../'], { relativeTo: activatedRoute, replaceUrl: true });
    } else {
      this.location.back();
    }
  }
}

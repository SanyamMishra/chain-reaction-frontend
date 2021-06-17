import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.userProfileService.readUserProfile();
  }
}

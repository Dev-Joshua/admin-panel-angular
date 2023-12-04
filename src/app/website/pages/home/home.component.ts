import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public sizeDisplay: string = 'phone' || 'web';
  profile: User | null = null;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {
    // this.mediaQuery();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => {
      this.profile = data;
    });
  }

  // public mediaQuery() {
  //   this.breakpointObserver
  //     .observe(Breakpoints.Small)
  //     .subscribe((state: BreakpointState) => {
  //       if (state.matches) {
  //         this.sizeDisplay = 'phone';
  //       }
  //     });

  //   this.breakpointObserver
  //     .observe(Breakpoints.Web)
  //     .subscribe((state: BreakpointState) => {
  //       if (state.matches) {
  //         this.sizeDisplay = 'web';
  //       }
  //     });
  // }
}

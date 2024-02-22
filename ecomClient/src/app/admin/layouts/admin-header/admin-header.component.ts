import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserStorageService } from '../../../shared/services/user-storage/user-storage.service';
import { DecodeHtmlEntitiesPipe } from "../../../shared/pipes/decode-html-entities.pipe";

@Component({
    selector: 'app-admin-header',
    standalone: true,
    templateUrl: './admin-header.component.html',
    styleUrl: './admin-header.component.css',
    imports: [
        CommonModule,
        RouterModule,
        RouterLink,
        RouterLinkActive,
        DecodeHtmlEntitiesPipe,
    ]
})
export class AdminHeaderComponent {

  @Output() isOpenSidebar = new EventEmitter<boolean>();
  isShowUserOptions: boolean = false;
  avatarUrl: string = "assets/images/profile-img.jpg";
  user: any;

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {
    this.user = UserStorageService.getUser();
  }

  tryLogOut() {
    UserStorageService.signOut();
    this.router.navigateByUrl("/login");
  }

  toggleSideBar() {
    this.isOpenSidebar.emit();
  }

}

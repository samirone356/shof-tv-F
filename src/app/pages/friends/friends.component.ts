import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';
import { COMMUNITY_ACTIVITY, COMMUNITY_FRIENDS } from '../../features/community/data/community.data';
import { Activity, Friend } from '../../features/community/models/community.models';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  friends: readonly Friend[] = COMMUNITY_FRIENDS;
  activities: readonly Activity[] = COMMUNITY_ACTIVITY;
}

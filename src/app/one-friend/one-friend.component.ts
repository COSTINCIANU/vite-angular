import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: '../one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendXss:string="<script>alert('Hello, XSS')</script>";
  oneFriendPassions:string[]=['catch','box','meditation'];


  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }
}


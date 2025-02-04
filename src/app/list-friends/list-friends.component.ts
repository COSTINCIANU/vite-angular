import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
// import { ListFriendsComponent } from '../list-friends/list-friends.component';



@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  listFriendsCreationStatus: string = "Aucun ami ajouté pour le moment.";
  listFriendsInputText: string = "";

  onAddingFriends(): void {
    this.listFriendsCreationStatus = "Un nouvel ami a été ajouté !";
  }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
    console.log(this.listFriendsInputText);
  }


}

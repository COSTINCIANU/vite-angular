import { Component } from '@angular/core';
// Import FormsModule dans le composant
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  // Indique que ce composant est standalone
  standalone: true,
  // Import du module de formulaires
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // Variable pour le Two-Way Data Binding
  userName: string = "";

  resetUserName(): void {
    // Réinitialise le champ input
    this.userName = "";
  }
}

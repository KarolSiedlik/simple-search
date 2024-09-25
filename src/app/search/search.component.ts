import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent {}

// Write a simple search functionality
// Use https://swapi.dev/documentation
// Use `planets` resource
// Send request only when there are at least 3 characters in the input and 300ms after user finished input
// Search results - display results with planet name and planet population, clicking on a result should redirect to planet details
// If there are no results, display a message "No results found"
// Routing - make it so that users can access planet details using identificator in url
// Bonus - highlight search phrase on results list
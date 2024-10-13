import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
  @Input() categories: string[] = [];
  @Output() filter = new EventEmitter<string>();

  selectCategory(category: string) {
    this.filter.emit(category);
  }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../../../products/services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select',
  standalone: false,

  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit, OnChanges {

  @Input() title: string = ''
  @Input() Elements: string[] = []
  selectedOption: string = 'All'

  // 1 ) Event definition
  @Output() OnSelectedChange: EventEmitter<string>

  changeSelection() {
    // 2 ) Event Emit variable of selected category
    this.OnSelectedChange.emit(this.selectedOption)

  }
  constructor() {
    // 2 ) Event Initializaton
    this.OnSelectedChange = new EventEmitter<string>()
  }
  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  
}

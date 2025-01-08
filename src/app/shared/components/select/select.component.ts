import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-select',
  standalone: false,

  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit, OnChanges {

  @Input() allShow: boolean =false
  @Input() title: string = ''
  @Input() marginDiv: string = ''
  @Input() marginLabel: string = ''
  @Input() colWidth: string = ''
  @Input({required:true}) Elements: string[] = []
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

import {Component} from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent {
  upArrow = '\u23f6'
  downArrow = '\u23f7'
  isCollapsed: boolean = false
  collapseIndicator: string = this.isCollapsed ? this.upArrow : this.downArrow

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
    this.collapseIndicator = !this.isCollapsed ? this.downArrow : this.upArrow
  }
}

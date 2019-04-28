import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-simple-help-text',
  templateUrl: './simple-help-text.component.html',
  styleUrls: ['./simple-help-text.component.scss']
})
export class SimpleHelpTextComponent {
  @Input()
  title: string = "Hilfe";

  @Input()
  text: string = "Es steht keine Hilfe zur Verfügung";

  @ViewChild("helpDialog")
  dialog: ElementRef;

  constructor(private modalService: NgbModal) { }

  openDialog(): void {
    this.modalService.open(this.dialog);
  }
}

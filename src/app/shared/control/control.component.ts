import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent {
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");
  label = input.required<string>();
  private ele = inject(ElementRef);

  onClick() {
    console.log("Clicked!");
    console.log(this.ele); 
    console.log(this.control());
  }
}

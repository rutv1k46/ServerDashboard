import { Component, OnDestroy, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrl: "./server-status.component.css",
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<"online" | "offline" | "unknown">("offline");
  private interval?: ReturnType<typeof setInterval>

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set("online");
      } else if (rnd < 0.9) {
        this.currentStatus.set("offline");
      } else {
        this.currentStatus.set("unknown");
      }
    }, 5000);
  }

  ngAfterViewInit(){
    console.log('After View Init')
  }

  ngOnDestroy(): void {
      clearTimeout(this.interval)
  }
}

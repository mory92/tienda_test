import { Component, OnInit, Input } from "@angular/core";
import { SplashAnimationType } from "./splash-animation-type";

@Component({
  selector: "splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  windowWidth: string;
  splashTransition: string;
  opacityChange: number = 1;
  showSplash = true;

  @Input() duration: number = 0.5;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.duration + "s";
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.splashTransition + "s";
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = "opacity " + this.splashTransition + "s";
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      //this.windowWidth = "-" + window.innerWidth + "px";
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.duration * 1000);
    }, 3000);
  }
}

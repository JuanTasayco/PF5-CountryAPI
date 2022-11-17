import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import { environment } from 'src/environments/environment';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, AfterViewInit {


  @ViewChild("portada") portada!: ElementRef;
  @ViewChild("a") block!: ElementRef;

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxKey;
    gsap.registerPlugin(ScrollTrigger);
  }


  ngAfterViewInit(): void {
    /* gsap.defaults({ duration: 2, ease: "none" });

    gsap.set(this.block.nativeElement, {
      xPercent: 0
    })

    
        const tl = gsap.timeline();
    
            tl.to(this.block.nativeElement, {
              xPercent: -100,
            })
        
            ScrollTrigger.create({
              animation: tl,
              trigger: this.portada.nativeElement,
              markers: true,
              start: "top top",
              end: "+=2000",
              scrub: true,
              pin: true
            }) */

  }

  title = '06-Filters';
}

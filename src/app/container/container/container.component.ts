import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit,OnInit {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {}

  onChange(index: number){
    if(index === 0){
      this.router.navigate(['/todo']);
    } else if (index===1){
      this.router.navigate(['/statistics'])
    }
    
  }

  ngAfterViewInit() {
   const path = this.router.routerState.snapshot.url;
 
    if (path === '/todo') {
      this.tabGroup.selectedIndex = 0;
    } else if (path === '/statistics') {
      this.router.navigate(['/todo'])
      this.tabGroup.selectedIndex = 1;
   } 
  }
/*
    this.route.url.subscribe(urlSegments => {
      console.log(urlSegments)
      const path = urlSegments.join('/'); // Konwertuj segmenty URL na ścieżkę

      console.log(path)
      
    });
    */
  }


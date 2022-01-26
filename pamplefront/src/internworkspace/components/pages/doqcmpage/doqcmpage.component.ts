import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iqcm } from 'src/models/qcm.interface';

@Component({
  selector: 'app-doqcmpage',
  templateUrl: './doqcmpage.component.html',
  styleUrls: ['./doqcmpage.component.scss']
})
export class DoqcmpageComponent implements OnInit {

  // Subscription to route params. Used to access route id
  private routeSubscription: Subscription | any;
  // Variable for route id
  public routeId: number | any;
  // QCM data
  public qcmList: Iqcm[] = [];

  // ActivatedRoute used to acess route params with route subscription
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Accessing route param 'id'
    this.routeSubscription = this.route.params.subscribe(params => {
      this.routeId = params["id"];
    })

    // Used to populate qcm list with fetched data from resolver
    this.qcmList = this.route.snapshot.data.qcmList;
  }

  ngOnDestroy(): void {
    // Unsubscribe to Route Subscription when the component is destroy
    this.routeSubscription.unsubscribe();
  }

}
import {Component, OnDestroy} from '@angular/core';
import {EditingService} from '../../services/editing.service';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnDestroy {

  editMode;

  subscriptions = [];
  constructor(
      private editService: EditingService,
      public loginService: LoginService,
  ) {
    this.subscriptions.push(this.editService.editMode.subscribe( data => {
      this.editMode = data;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => {
      sub.unsubscribe();
    });
  }

  toggleEditMode() {
    this.editService.editMode.next(!this.editMode);
  }
}

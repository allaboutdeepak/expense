import { Component } from '@angular/core';
import { PersonalPage } from '../personal/personal';
import { GroupsPage } from '../groups/groups';
import { ReportPage } from '../report/report';
import { EarningPage } from '../earning/earning';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PersonalPage;
  tab2Root = GroupsPage;
  tab3Root = ReportPage;
  tab4Root = EarningPage;
  constructor() {

  }
}

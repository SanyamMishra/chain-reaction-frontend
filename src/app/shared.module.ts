import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';

const sharedModules = [
  NzGridModule,
  NzAvatarModule,
  NzInputModule,
  NzSwitchModule,
  NzSpinModule,
  NzIconModule
];

@NgModule({
  declarations: [],
  imports: sharedModules,
  exports: sharedModules
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { CreateFakeArrayPipe } from './pipe/create-fake-array.pipe';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LocalStorageService } from './storage/services/local-storage/local-storage.service';
import { StorageService } from './storage/services/storageService';

export function jwtOptionsFactory(storageService:StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000']
  }
}
@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    OverlayLoadingComponent,
    CreateFakeArrayPipe
  ],
  imports: [
    
    CommonModule,
    AuthModule,
    CoreRoutingModule,
    StorageModule, 
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ],
  exports:[OverlayLoadingComponent, CreateFakeArrayPipe],
})
export class CoreModule { }

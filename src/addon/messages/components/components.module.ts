// (C) Copyright 2015 Interactive Group Pvt Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoreComponentsModule } from '@components/components.module';
import { CoreDirectivesModule } from '@directives/directives.module';
import { CorePipesModule } from '@pipes/pipes.module';
import { CoreSearchComponentsModule } from '@core/search/components/components.module';
import { AddonMessagesDiscussionsComponent } from '../components/discussions/discussions';
import { AddonMessagesConfirmedContactsComponent } from '../components/confirmed-contacts/confirmed-contacts';
import { AddonMessagesContactRequestsComponent } from '../components/contact-requests/contact-requests';
import { AddonMessagesContactsComponent } from '../components/contacts/contacts';

@NgModule({
    declarations: [
        AddonMessagesDiscussionsComponent,
        AddonMessagesConfirmedContactsComponent,
        AddonMessagesContactRequestsComponent,
        AddonMessagesContactsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild(),
        CoreComponentsModule,
        CoreDirectivesModule,
        CorePipesModule,
        CoreSearchComponentsModule,
    ],
    providers: [
    ],
    exports: [
        AddonMessagesDiscussionsComponent,
        AddonMessagesConfirmedContactsComponent,
        AddonMessagesContactRequestsComponent,
        AddonMessagesContactsComponent
    ]
})
export class AddonMessagesComponentsModule {}

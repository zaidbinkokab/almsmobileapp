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

import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Observable, Subscriber } from 'rxjs';
import { TeardownLogic } from 'rxjs/Subscription';

/**
 * Emulates the Cordova Geolocation plugin in desktop apps and in browser.
 */
@Injectable()
export class GeolocationMock extends Geolocation {

    /**
     * Get the device's current position.
     *
     * @param options The geolocation options.
     * @returns Returns a Promise that resolves with the position of the device, or rejects with an error.
     */
    getCurrentPosition(options?: GeolocationOptions): Promise<Geoposition> {
        return new Promise((resolve, reject): any => {
            return navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * @param options The geolocation options.
     * @returns Returns an Observable that notifies with the position of the device, or errors.
     */
    watchPosition(options?: GeolocationOptions): Observable<Geoposition> {
        return new Observable<Geoposition>((subscriber: Subscriber<Geoposition>): TeardownLogic => {
            const watchId = navigator.geolocation.watchPosition(
                subscriber.next.bind(subscriber), subscriber.error.bind(subscriber), options);

            return (): void => {
                navigator.geolocation.clearWatch(watchId);
            };
        });
    }
}

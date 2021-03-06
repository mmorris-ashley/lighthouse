/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * Expected Lighthouse audit values for sites with OOPIFS.
 */
module.exports = [
  {
    requestedUrl: 'http://localhost:10200/oopif.html',
    finalUrl: 'http://localhost:10200/oopif.html',
    audits: {
      'network-requests': {
        details: {
          items: {
            // We want to make sure we are finding the iframe's requests (paulirish.com) *AND*
            // the iframe's iframe's iframe's requests (youtube.com/doubleclick/etc).
            // - paulirish.com ~40-60 requests
            // - paulirish.com + all descendant iframes ~80-90 requests
            length: '>70',
          },
        },
      },
    },
  },
];

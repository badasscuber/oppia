// Copyright 2017 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Directive for playing audio in the exploration editor.
 */

oppia.directive('audioPlayer', [
  'UrlInterpolationService', function(UrlInterpolationService) {
    return {
      restrict: 'E',
      scope: {
        getSourceUrl: '&sourceUrl',
      },
      templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
        '/components/forms/audio_player_directive.html'),
      controller: ['$scope', '$element', function($scope, $element) {
        var audio = $element.find('audio')[0];
        $scope.$on('$locationChangeStart', function(event) {
          // The audio is paused when a change in route is detected.
          audio.pause();
        });
      }]
    };
  }
]);

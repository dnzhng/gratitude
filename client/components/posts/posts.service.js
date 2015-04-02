'use strict';

angular.module('gratitudeApp')
  .factory('posts', function ($resource) {
    return $resource('/api/posts/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      createPost: {
        method: 'POST',
        params: {}
      }
    });
  });

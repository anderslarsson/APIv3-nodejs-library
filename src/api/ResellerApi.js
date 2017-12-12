/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddCredits', 'model/CreateChild', 'model/CreateModel', 'model/ErrorModel', 'model/GetChildInfo', 'model/GetChildrenList', 'model/ManageIp', 'model/RemainingCreditModel', 'model/RemoveCredits', 'model/UpdateChild'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddCredits'), require('../model/CreateChild'), require('../model/CreateModel'), require('../model/ErrorModel'), require('../model/GetChildInfo'), require('../model/GetChildrenList'), require('../model/ManageIp'), require('../model/RemainingCreditModel'), require('../model/RemoveCredits'), require('../model/UpdateChild'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.ResellerApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.AddCredits, root.SibApiV3Sdk.CreateChild, root.SibApiV3Sdk.CreateModel, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.GetChildInfo, root.SibApiV3Sdk.GetChildrenList, root.SibApiV3Sdk.ManageIp, root.SibApiV3Sdk.RemainingCreditModel, root.SibApiV3Sdk.RemoveCredits, root.SibApiV3Sdk.UpdateChild);
  }
}(this, function(ApiClient, AddCredits, CreateChild, CreateModel, ErrorModel, GetChildInfo, GetChildrenList, ManageIp, RemainingCreditModel, RemoveCredits, UpdateChild) {
  'use strict';

  /**
   * Reseller service.
   * @module api/ResellerApi
   * @version 3.x.x
   */

  /**
   * Constructs a new ResellerApi. 
   * @alias module:api/ResellerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add Email and/or SMS credits to a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/AddCredits} addCredits Values to post to add credit to a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemainingCreditModel} and HTTP response
     */
    this.addCreditsWithHttpInfo = function(childId, addCredits) {
      var postBody = addCredits;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling addCredits");
      }

      // verify the required parameter 'addCredits' is set
      if (addCredits === undefined || addCredits === null) {
        throw new Error("Missing the required parameter 'addCredits' when calling addCredits");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemainingCreditModel;

      return this.apiClient.callApi(
        '/reseller/children/{childId}/credits/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add Email and/or SMS credits to a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/AddCredits} addCredits Values to post to add credit to a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemainingCreditModel}
     */
    this.addCredits = function(childId, addCredits) {
      return this.addCreditsWithHttpInfo(childId, addCredits)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Associate a dedicated IP to the child
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/ManageIp} ipId IP&#39;s id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.associateIpToChildWithHttpInfo = function(childId, ipId) {
      var postBody = ipId;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling associateIpToChild");
      }

      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling associateIpToChild");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childId}/ips/associate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Associate a dedicated IP to the child
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/ManageIp} ipId IP&#39;s id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.associateIpToChild = function(childId, ipId) {
      return this.associateIpToChildWithHttpInfo(childId, ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a reseller child
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChild} opts.resellerChild reseller child to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateModel} and HTTP response
     */
    this.createResellerChildWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['resellerChild'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/reseller/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a reseller child
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChild} opts.resellerChild reseller child to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateModel}
     */
    this.createResellerChild = function(opts) {
      return this.createResellerChildWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single reseller child based on the childId supplied
     * @param {Number} childId id of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteResellerChildWithHttpInfo = function(childId) {
      var postBody = null;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling deleteResellerChild");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes a single reseller child based on the childId supplied
     * @param {Number} childId id of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteResellerChild = function(childId) {
      return this.deleteResellerChildWithHttpInfo(childId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Dissociate a dedicated IP to the child
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/ManageIp} ipId IP&#39;s id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.dissociateIpFromChildWithHttpInfo = function(childId, ipId) {
      var postBody = ipId;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling dissociateIpFromChild");
      }

      // verify the required parameter 'ipId' is set
      if (ipId === undefined || ipId === null) {
        throw new Error("Missing the required parameter 'ipId' when calling dissociateIpFromChild");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childId}/ips/dissociate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Dissociate a dedicated IP to the child
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/ManageIp} ipId IP&#39;s id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.dissociateIpFromChild = function(childId, ipId) {
      return this.dissociateIpFromChildWithHttpInfo(childId, ipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the info about a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildInfo} and HTTP response
     */
    this.getChildInfoWithHttpInfo = function(childId) {
      var postBody = null;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling getChildInfo");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildInfo;

      return this.apiClient.callApi(
        '/reseller/children/{childId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the info about a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildInfo}
     */
    this.getChildInfo = function(childId) {
      return this.getChildInfoWithHttpInfo(childId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the list of all reseller&#39;s children accounts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChildrenList} and HTTP response
     */
    this.getResellerChildsWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetChildrenList;

      return this.apiClient.callApi(
        '/reseller/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets the list of all reseller&#39;s children accounts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChildrenList}
     */
    this.getResellerChilds = function() {
      return this.getResellerChildsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove Email and/or SMS credits from a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/RemoveCredits} removeCredits Values to post to remove email or SMS credits from a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemainingCreditModel} and HTTP response
     */
    this.removeCreditsWithHttpInfo = function(childId, removeCredits) {
      var postBody = removeCredits;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling removeCredits");
      }

      // verify the required parameter 'removeCredits' is set
      if (removeCredits === undefined || removeCredits === null) {
        throw new Error("Missing the required parameter 'removeCredits' when calling removeCredits");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RemainingCreditModel;

      return this.apiClient.callApi(
        '/reseller/children/{childId}/credits/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove Email and/or SMS credits from a specific child account
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/RemoveCredits} removeCredits Values to post to remove email or SMS credits from a specific child account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemainingCreditModel}
     */
    this.removeCredits = function(childId, removeCredits) {
      return this.removeCreditsWithHttpInfo(childId, removeCredits)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates infos of reseller&#39;s child based on the childId supplied
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/UpdateChild} resellerChild values to update in child profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateResellerChildWithHttpInfo = function(childId, resellerChild) {
      var postBody = resellerChild;

      // verify the required parameter 'childId' is set
      if (childId === undefined || childId === null) {
        throw new Error("Missing the required parameter 'childId' when calling updateResellerChild");
      }

      // verify the required parameter 'resellerChild' is set
      if (resellerChild === undefined || resellerChild === null) {
        throw new Error("Missing the required parameter 'resellerChild' when calling updateResellerChild");
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reseller/children/{childId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates infos of reseller&#39;s child based on the childId supplied
     * @param {Number} childId id of reseller&#39;s child
     * @param {module:model/UpdateChild} resellerChild values to update in child profile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateResellerChild = function(childId, resellerChild) {
      return this.updateResellerChildWithHttpInfo(childId, resellerChild)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

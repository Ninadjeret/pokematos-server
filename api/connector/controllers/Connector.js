'use strict';

/**
 * Connector.js controller
 *
 * @description: A set of functions called "actions" for managing `Connector`.
 */

module.exports = {

  /**
   * Retrieve connector records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.connector.search(ctx.query);
    } else {
      return strapi.services.connector.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a connector record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.connector.fetch(ctx.params);
  },

  /**
   * Count connector records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.connector.count(ctx.query);
  },

  /**
   * Create a/an connector record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.connector.add(ctx.request.body);
  },

  /**
   * Update a/an connector record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.connector.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an connector record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.connector.remove(ctx.params);
  },

  /**
   * Add relation to a/an connector record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.connector.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an connector record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.connector.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an connector record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.connector.removeRelation(ctx.params, ctx.request.body);
  }
};

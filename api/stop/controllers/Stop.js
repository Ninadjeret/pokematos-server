'use strict';

/**
 * Stop.js controller
 *
 * @description: A set of functions called "actions" for managing `Stop`.
 */

module.exports = {

  /**
   * Retrieve stop records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.stop.search(ctx.query);
    } else {
      return strapi.services.stop.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a stop record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.stop.fetch(ctx.params);
  },

  /**
   * Count stop records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.stop.count(ctx.query);
  },

  /**
   * Create a/an stop record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.stop.add(ctx.request.body);
  },

  /**
   * Update a/an stop record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.stop.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an stop record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.stop.remove(ctx.params);
  },

  /**
   * Add relation to a/an stop record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.stop.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an stop record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.stop.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an stop record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.stop.removeRelation(ctx.params, ctx.request.body);
  }
};

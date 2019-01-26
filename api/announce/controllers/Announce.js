'use strict';

/**
 * Announce.js controller
 *
 * @description: A set of functions called "actions" for managing `Announce`.
 */

module.exports = {

  /**
   * Retrieve announce records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.announce.search(ctx.query);
    } else {
      return strapi.services.announce.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a announce record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.announce.fetch(ctx.params);
  },

  /**
   * Count announce records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.announce.count(ctx.query);
  },

  /**
   * Create a/an announce record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.announce.add(ctx.request.body);
  },

  /**
   * Update a/an announce record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.announce.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an announce record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.announce.remove(ctx.params);
  },

  /**
   * Add relation to a/an announce record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.announce.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an announce record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.announce.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an announce record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.announce.removeRelation(ctx.params, ctx.request.body);
  }
};

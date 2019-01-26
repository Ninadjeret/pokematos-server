'use strict';

/**
 * Raid.js controller
 *
 * @description: A set of functions called "actions" for managing `Raid`.
 */

module.exports = {

  /**
   * Retrieve raid records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.raid.search(ctx.query);
    } else {
      return strapi.services.raid.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a raid record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.raid.fetch(ctx.params);
  },

  /**
   * Count raid records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.raid.count(ctx.query);
  },

  /**
   * Create a/an raid record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.raid.add(ctx.request.body);
  },

  /**
   * Update a/an raid record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.raid.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an raid record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.raid.remove(ctx.params);
  },

  /**
   * Add relation to a/an raid record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.raid.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an raid record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.raid.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an raid record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.raid.removeRelation(ctx.params, ctx.request.body);
  }
};

'use strict';

/**
 * Userrole.js controller
 *
 * @description: A set of functions called "actions" for managing `Userrole`.
 */

module.exports = {

  /**
   * Retrieve userrole records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.userrole.search(ctx.query);
    } else {
      return strapi.services.userrole.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a userrole record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.userrole.fetch(ctx.params);
  },

  /**
   * Count userrole records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.userrole.count(ctx.query);
  },

  /**
   * Create a/an userrole record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userrole.add(ctx.request.body);
  },

  /**
   * Update a/an userrole record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userrole.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userrole record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userrole.remove(ctx.params);
  },

  /**
   * Add relation to a/an userrole record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.userrole.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an userrole record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.userrole.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an userrole record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.userrole.removeRelation(ctx.params, ctx.request.body);
  }
};

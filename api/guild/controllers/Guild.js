'use strict';

/**
 * Guild.js controller
 *
 * @description: A set of functions called "actions" for managing `Guild`.
 */

module.exports = {

  /**
   * Retrieve guild records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.guild.search(ctx.query);
    } else {
      return strapi.services.guild.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a guild record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.guild.fetch(ctx.params);
  },

  /**
   * Count guild records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.guild.count(ctx.query);
  },

  /**
   * Create a/an guild record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.guild.add(ctx.request.body);
  },

  /**
   * Update a/an guild record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.guild.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an guild record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.guild.remove(ctx.params);
  },

  /**
   * Add relation to a/an guild record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.guild.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an guild record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.guild.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an guild record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.guild.removeRelation(ctx.params, ctx.request.body);
  }
};

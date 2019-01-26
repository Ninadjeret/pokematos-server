'use strict';

/**
 * Pokemon.js controller
 *
 * @description: A set of functions called "actions" for managing `Pokemon`.
 */

module.exports = {

  /**
   * Retrieve pokemon records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pokemon.search(ctx.query);
    } else {
      return strapi.services.pokemon.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pokemon record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pokemon.fetch(ctx.params);
  },

  /**
   * Count pokemon records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pokemon.count(ctx.query);
  },

  /**
   * Create a/an pokemon record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pokemon.add(ctx.request.body);
  },

  /**
   * Update a/an pokemon record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pokemon.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pokemon record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pokemon.remove(ctx.params);
  },

  /**
   * Add relation to a/an pokemon record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.pokemon.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an pokemon record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.pokemon.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an pokemon record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.pokemon.removeRelation(ctx.params, ctx.request.body);
  }
};

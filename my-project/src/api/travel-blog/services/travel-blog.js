'use strict';

/**
 * travel-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel-blog.travel-blog');

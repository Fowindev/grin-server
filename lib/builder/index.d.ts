import express from "express";
/**
 * Build Server into express Application
 * @param {Object} server Server
 * @returns {express.Application} Express Application
 */
declare const build: (server: Object, app?: express.Application | undefined) => express.Application;
export { build };

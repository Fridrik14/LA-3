const { gql } = require("apollo-server");
const types = require('./types');
const enums = require('./enums');
const scalar = require('./scalar');
const inputs = require('./input');
const queries = require('./queries');
const mutations = require('./mutations'); 
/*
    Exporting the whole schema
*/
module.exports = gql`
    ${types}
    ${enums}
    ${scalar}
    ${inputs}
    ${queries}
    ${mutations}
    
`;
const { typeDefs } = require('./types');
const { gql } = require("apollo-server");
const types = require('./types');
const enums = require('./enums');
const queries = require('./queries');
const mutations = require('./mutations');

module.exports = gql`
    ${types}
    ${enums}
    ${queries}
    ${mutations}
`;
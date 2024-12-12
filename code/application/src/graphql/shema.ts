import gql from "graphql-tag";
const shema = gql`
  type Post {
    image: String
    author: String
    description: String
    name: String
    wiews: Int
    tags: [String]
    _id: String
  }

  input AddPostInput {
    image: String!
    author: String!
    description: String!
    name: String!
    wiews: Int!
    tags: [String!]!
  }

  type Query {
    getAll: [Post]
    getAllById(id: String!): Post
    getAllByUserName(name: String!): [Post]
  }
  type Mutation {
    addPost(data: AddPostInput!): Post
    updateWiew(id: String!): Post
  }
`;

export default shema;

export const schema = `#graphql
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    googleId: String
    role: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!

}
type Query {
    hello: String
    wow: String
    users: [User]
}
type Product {
    id: ID
    name: String
    price: Float
}
`;

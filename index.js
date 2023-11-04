const { ApolloServer} = require('apollo-server')

const mongoose = require('mongoose');


const MONGODB = "Add Your mongo url"


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
typeDefs,
resolvers

})


// mongoose.connect(MONGODB, {useNewUrlParser : true})
//     .then(() => {
//         console.log("MongoDB connected successuly");
//         return server.listen({port: 5000});
//     })
//     .then((res) => {
//         console.log(`Server running on ${res.url}`);
//         return server.listen({port: 5000});
//     })

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected successfully");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running on ${res.url}`);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB or starting the server:", err);
  });


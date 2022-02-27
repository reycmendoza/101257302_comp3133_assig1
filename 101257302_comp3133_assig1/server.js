const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require ('graphql');
const mongoose = require('mongoose');
const url = mongodb+srv://reyc:reyc@comp3133.srh0d.mongodb.net/101257302_comp3133_assig1?retryWrites=true&w=majority



//Connect to MongoDB
const connect = mongoose.connect(url,
{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const schema = buildSchema(`
    type Query {
        listing(listing_id: String, listing_title: String, description: String,  street: String, city: String, postal_code: String, price: Int, email: String, username: String  )
        book_listings(listing_id: String, booking_id: String, booking_date: Int, booking_start: Int, booking_end: Int, username: String   )
    },
    type Listing {
        listing_id: String
        listing_title: String
        description: String
        street: String
        city: String
        postal_code: String
        price: Int
        email: String
        username: String
        booking_id: String
        booking_date: Int 
        booking_start: Int 
        booking_end: Int 
    },
    type Mutation {
        
    }
`);

const root = { hello: () => 'Hello world!' };

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(5000., () => console.log('Server Running'));
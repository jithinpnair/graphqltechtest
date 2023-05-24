# graphqltechtest
tech test by pixel

This app is for developing a api using ExpressJS, MongoDB and graphQL
It can be run in localhost using - http://localhost:9030/graphql
API includes two queries (fetching) and two mutations (create and update)
Required node modules are 
    1)Express
    2)Apollo-Server-Express
    3)Mongoose
    4)Graphql

Node Version: v18.16.0
Graphql: 16.6.0
Sample Sandbox queries
------------------------

# query  {
#   getCanine(name:"kaisar") {
#     id
#     name
#     dateOfBirth
#     breed
#   }
# }


# query {
#   getAllCanines {
#     name
#     dateOfBirth
#     breed
#   }
# }


# mutation {
#   createCanine(canine:{
#     name: "Motu",
#     dateOfBirth: "2012-09-10",
#     breed: "Dash"
#   }) {
#     id
#     name
#     dateOfBirth
#     breed
#   }
# }


# mutation {
#   updateCanine(id: "646d64f4fb402818db4b2a61", canine: {name:"kaisar"}) {
#     id
#     name
#     dateOfBirth
#     breed
#   }
# }


import 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
    // Set url for graphQL services
    link: new HttpLink({ uri: 'http://10.42.84.69/graphiql' }),
    cache: new InMemoryCache(),
});

// ############################## query ##############################################
// client.query({
//     query: gql`
//       query {
//         workspaceAll {
//             uuid
//             version
//             apps {
//                 instanceId
//                 appId
//                 title
//                 name
//                 bounds {
//                     x
//                     y
//                     width
//                     height
//                 }
//             }
//         }
//       }
//     `,
// }).then(data => console.log(JSON.stringify(data, undefined, 2)))
//     .catch(error => console.error(error));

// ############################# query ###############################################
client.query({
    variables: {
        uuid: 'yyyyy'
    },
    query: gql`
          query workspaceById($uuid: String) {
            workspaceById(uuid: $uuid) {
                uuid
                version
                apps {
                    instanceId
                    template
                    appId
                    name
                    title
                    url
                    isVisible
                    isRelativeBounds
                    channel
                }
            }
          }
        `,
}).then(data => console.log(JSON.stringify(data, undefined, 2)))
    .catch(error => console.error(error));

// ############################## mutate ##############################################
client.mutate({
    variables: {
        input: {
            'uuid': 'yyyyy',
            'version': '1.0.0',
            'apps': [{
                'instanceId': '58u5il9prszscseavsqjtp0n',
                'template': 'appFrameTemplate',
                'appId': 'THOMSONREUTERS.REALTIME.THINMONITOR',
                'name': 'App',
                'title': 'Monitor',
                'url': 'cpurl://apps.cp./Apps/ThinMonitor/?RIC=0%23.FTSE',
                'bounds': {
                    'x': 0,
                    'y': 0,
                    'width': 33.33,
                    'height': 33.33
                },
                'isVisible': true,
                'isRelativeBounds': true,
                'persistData': '<PersistData><PData name="_archiveHash"><![CDATA[]]></PData></PersistData>',
                'channel': 0
            }]
        }
    },
    mutation: gql`
      mutation addWorkspace($input: WorkspaceInput!){
        addWorkspace(input: $input) {
            uuid
            version
            apps {
                instanceId
                appId
                title
                name
                bounds {
                    x
                    y
                    width
                    height
                }
            }
        }
      }
    `,
}).then(result => console.log(JSON.stringify(result, undefined, 2)))
    .catch(error => console.log(error));

// subscribe




import { apiClient } from './ApiClient';


//export const retrieveHelloWorldBean = () => {
  //  return apiClient.get('/hello-world-bean');
//}

export const retrieveHelloWorldPathVariable 
= (username,token) => {
    return apiClient.get(`/hello-world/path-variable/${username}`, 
        // {
        // headers: {
        //     Authorization: token // Base64 encoded 'in28minutes:dummy'
        // }
    // }
);
}
export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`,{
        headers: {
            Authorization: token
        }
    })

    
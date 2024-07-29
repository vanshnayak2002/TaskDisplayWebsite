import { useParams,Link} from 'react-router-dom';
import axios from 'axios'

function WelcomeComponent() {
  
    const {username}=useParams()

    function callHelloWorldRestApi(){
   console.log('called')
   //axios
   axios.get('http://localhost:8080/hello-world')
       .then( (response) =>successFulResponse(response))
       .catch((error )=> errorResponse(error)) 
       .finally(()=>console.log('cleanup'))
      
      
      

    }


    function successFulResponse(response){

    }

    function errorResponse(error){
      
    }
    
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
              Manage Your Todos -<Link to="/todos">Go here</Link>
            </div>

            <div>
              <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World </button>
            </div>
        </div>
    )
  }

  export default WelcomeComponent
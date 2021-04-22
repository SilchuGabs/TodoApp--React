import axios from 'axios';
class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(name) {
        return axios.get(`http://localhost:8080/hello-world/variable/${name}`)
    }



}

export default new HelloWorldService()
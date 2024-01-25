import { Account , Client} from "appwrite";

class AppwirteService {
    constructor(){
        this.client = new Client();
        this.client.setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('65ae7cef85236f76764d');
        this.account = new Account(this.client);
    }
    async getUserDetails() {
        try {
          const response = await this.account.get();
          console.log("YEyy user info",response);
          return response;
        } catch (error) {
            console.log("YEyy user error",error)
          console.error(error);
          throw error;
        }
}
}

const appwrite_service= new AppwirteService()
export default appwrite_service;


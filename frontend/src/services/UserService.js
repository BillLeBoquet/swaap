import axios from "axios";
import {formatSimpleUser} from "../util/utils";

class UserService {

    async getSimpleUserForTest() {
        const {data} = await axios.post(`/api/user`, {})
            .catch(function (error) {
                console.error(error)
            })
        return formatSimpleUser(data)
    }
}

export default UserService

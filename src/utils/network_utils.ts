import axios from 'axios';
import { PeopleResponse, decodePeopleResponse, defaultResponse } from '../interface/interface';


export const createGetRequest = async (url:string): Promise<PeopleResponse> => {
    try {
        const request = await axios.get(url);
        return decodePeopleResponse(request.data);
    }
    catch (err) {
        console.log(err);
        return defaultResponse;
    }
}

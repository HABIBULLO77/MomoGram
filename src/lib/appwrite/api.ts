import { INewUser } from "@/types";
import { ID} from 'appwrite';
import { account } from "./config";

export async function createUserAccount(user: INewUser){
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.name,
            user.email,
            user.password,
        )

        return newAccount;
        
    } catch (error) {
        console.log('Error creating user account', error);
        return error; 
    }
}
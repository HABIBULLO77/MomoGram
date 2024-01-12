import { INewUser } from '@/types'
import {
    useQuery,
    useMustaion,
    userQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'


export const useCreateUserAccount = () => {
    return useMustaion({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMustaion({
        mutationFn: (user: {
            email: string; password: string;
        }) => signInAccount(user),
    })
}
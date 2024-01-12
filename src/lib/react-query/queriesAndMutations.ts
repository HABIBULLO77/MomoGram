import { INewUser } from '@/types'
import {
    useQuery,
    useMustaion,
    userQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'


export const useCreateUserAccountMutation = () => {
    return useMustaion({
        mutationFn: (user: INewUser) => createUserAccount
    })
}
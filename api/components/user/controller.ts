import { Id } from "../../../models/id.model"
import { User } from "../../../models/user.model"
export const controller = (injectedStore) => {
    const list = () => {
        return injectedStore.list()
    }
    const get = (id:Id) => {
        return injectedStore.get(id)
    }
    const upsert = (user:User) => {
        
        return injectedStore.upsert(user)
    }

    return {
        list,
        get,
        upsert
    }
}
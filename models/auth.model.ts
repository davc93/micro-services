import { User } from "./user.model"
import {Id} from './id.model'
export interface Auth {
    id:Id,
    username:User['username'],
    password:string
}

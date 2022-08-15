import { ResulModel } from "../../models/resultModel";

export interface UserLoginResponse extends ResulModel{
    access_token:string;

}
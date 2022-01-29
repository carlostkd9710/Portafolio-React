import { url } from "./Url";

export const PostData = async(obj)=>{
    await fetch(url,{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}
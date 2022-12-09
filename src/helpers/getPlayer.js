import { sportDBApi } from "../api/sportDBApi"

export const getPlayer= async (playerId)=>{
    try{

        const resp = await sportDBApi.get(`/lookupplayer.php?id=${playerId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}
import { sportDBApi } from "../api/sportDBApi"

export const getPlayerByName = async (playerName)=>{
    try{

        const resp = await sportDBApi.get(`/searchplayers.php?p=${playerName}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}
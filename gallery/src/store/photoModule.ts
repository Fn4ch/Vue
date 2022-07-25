import { IPhoto } from "@/types/IPhoto"

export interface State{
isLoading: boolean
  photos: IPhoto[]
}

export const photoModule: <State>{
    state: () =>{
        isLoading: false,
        photos: []
    },
    
}
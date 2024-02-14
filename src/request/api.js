import { post, get } from './index'

export const Upload = (parmas) => post('/fileUpload',parmas,true) 
export const TestApi = (parmas) => get('/g',parmas)

export const uploadvideo = (parmas) => post('/Upload', parmas, true)
import db from '../../util/database'

export default function handler(req,res){
    res.json(db)
}
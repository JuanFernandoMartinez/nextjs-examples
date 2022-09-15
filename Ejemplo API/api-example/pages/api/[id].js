import {invertString} from "../../model/StringFunFunctions";

export default function handler(req, res) {
    if (req.method === 'POST'){
        res.send({
            query: req.query.id,
            str: invertString(req.query.id),
            str3: req.body.dato,
            str2: invertString(req.body.dato)

        })
    }else{
        res.send({
            query: req.query.id,
            str: invertString(req.query.id)
        })
    }
}

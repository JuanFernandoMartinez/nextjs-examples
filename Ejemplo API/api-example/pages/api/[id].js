import {invertString} from "../../model/StringFunFunctions";
import db from "../../util/database";

export default function handler(req, res) {
    let id = req.query.id
    let di = invertString(id)
    db.push({
        a: id,
        b: di
    })

    console.log(db)

    res.json(db)

}

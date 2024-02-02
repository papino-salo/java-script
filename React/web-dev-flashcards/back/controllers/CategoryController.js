import { validationResult } from "express-validator";
import cardModelCategory from "../models/CardCategory.js"
import cardModelAnswer from "../models/CardAnswer.js"

export const add =  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    try {
        const doc = new cardModelCategory({
            tittle: req.body.tittle,
            listQuestions: req.listAnswerTettlis,
            typeCategory: req.body.typeCategory,
            leftColor: req.body.leftColor,
            rightColor: req.body.rightColor
        })
    
        const cardAnswer = await doc.save()
    
        res.json(cardAnswer)
    } catch(e) {
        res.send(e)
    }
}

export const get = async (req, res) => {
    try {
        const Category = req.MyReq
        res.json(Category)
    } catch (error) {
        res.send(error)        
    }
}

export const update = async (req, res) => {
    try {
        const type = req.body.type

        await cardModelCategory.updateOne(
            {
                typeCategory: type
            },
            {
                tittle: req.body.tittle,
                leftColor: req.body.leftColor,
                rightColor: req.body.rightColor
            }
        );
        res.json()
    } catch (error) {
        console.log(error)
    }
}

export const remove = async (req, res) => {
    try {
        const cardType = req.body.type
        await cardModelAnswer.deleteMany({
            typeCategoryAnswer: cardType
        })

        await cardModelCategory.deleteMany({
            typeCategory: cardType
        })

        res.json({sucsess: true})
    } catch (error) {
        console.log(error)
    }
}
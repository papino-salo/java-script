import cardModelAnswer from "../models/CardAnswer.js"
import { validationResult } from "express-validator";

export const add = async (req, res) => {

    try {
        console.log(req.body)
        const doc = new cardModelAnswer({
            tittle: req.body.tittle,
            shortAnswer: req.body.shortAnswer,
            linkSourceAnswer: req.body.linkSourceAnswer,
            typeCategoryAnswer: req.body.typeCategoryAnswer,
            leftColor: req.body.leftColor,
            rightColor: req.body.rightColor
        })
    
        const cardAnswer = await doc.save()
    
        res.json(cardAnswer)
    } catch (error) {
        res.json(error)
    }
}

export const get = async (req, res) => {
    try {
        const allCardsAnswerInCategory = req.AllCardsAnswerCategory

        if (!allCardsAnswerInCategory) {
            return res.status(404).json({
                massage: "Категория не найдена"
            })
        }

        res.json(allCardsAnswerInCategory)

    } catch (error) {
        req.json(error)
    }
}

export const update = async (req, res) => {
    try {
        console.log(req.body)

        const cardId = req.body.id

        await cardModelAnswer.updateOne(
            {
                _id: cardId
            },
            {
                tittle: req.body.tittle,
                shortAnswer: req.body.shortAnswer,
                linkSourceAnswer: req.body.linkSourceAnswer,
                typeCategoryAnswer: req.body.typeCategoryAnswer
            }
        );

        res.json({sucsess: true})
    } catch (error) {
        console.log(error)
    }
}

export const remove = async (req, res) => {
    try {
        const cardId = req.body.id
        await cardModelAnswer.findOneAndDelete({
            _id: cardId
        })
        res.json()
    } catch (error) {
        console.log(error)
    }
}
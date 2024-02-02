import cardModelAnswer from "./models/CardAnswer.js"
import CardCategory from "./models/CardCategory.js"

export const addListQuestionsToCategory = async (req, res, next) => {
    let listAnswersTemp = await cardModelAnswer.find()
    let list = []
    listAnswersTemp.forEach(element => {
        if (req.body.typeCategory == element.typeCategoryAnswer) {
            list.push(element.tittle)
        }
    });
    req.listAnswerTettlis = list
    next()
}

export const getAllCardsAnswerInCategory = async (req, res, next) => {
    let listCardsAnswerInCategoryTemp = await cardModelAnswer.find({typeCategoryAnswer: req.params.type})
    let category = await CardCategory.find({typeCategory: req.params.type})
    listCardsAnswerInCategoryTemp.forEach((element) => {
        element.leftColor = category[0].leftColor
        element.rightColor = category[0].rightColor
    })
    req.AllCardsAnswerCategory = listCardsAnswerInCategoryTemp
    next()
}

export const getAllTittlesAnswerInCategory = async (req, res, next) => {
    let listAllTittlesAnswerInCategoryTemp = await cardModelAnswer.find()
    let categ = await CardCategory.find()
    categ.map(element => {
        listAllTittlesAnswerInCategoryTemp.forEach((el) => {
            if (el.typeCategoryAnswer == element.typeCategory) {
                element.listQuestions.push(el.tittle)
            }
        })
    })
    req.MyReq = categ
    next()
}
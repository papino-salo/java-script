import { body } from "express-validator"

export const CardAnswerValidation = [
    body('tittle').isLength({min: 3}),
    body('shortAnswer').isLength({min: 3}),
    body("linkSourceAnswer").isURL()
]

export const CardCategoryValidation = [
    body('tittle').isLength({min: 2})
]



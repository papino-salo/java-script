import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartAnswer from "../../comps/CartAnswer";
import carts from "../../../styles/cart.css";
import ModalRemove from "../../views/local/ModalRemove";
import ModalUpdate from "../../views/local/ModalUpdate";
import GlobalStyle from "../../../styles/global.css";
import { fetchAnswers } from "../../../Redux-state/reducers/showCards";
import { Skeleton } from '@mui/material';
import { grey } from "@mui/material/colors";



const { SectionCarts, ContainerCart } = carts,
    { TitleComp } = GlobalStyle

function GeneralCategory(props) {

    const dispatch = useDispatch()
    const { itemsAnswer, statusAnswer } = useSelector(state => state.showCards),
        isShowModalRemove = useSelector(state => state.removeCard.isShowModalRemove),
        isShowModalUpdate = useSelector(state => state.updateCard.isShowModalUpdate),
        { tittleCategoryInAnswers } = useSelector(state => state.showCards)
    const isAnswerLoading = statusAnswer === "loading"

    let params = useParams()
    useEffect(() => {
        dispatch(fetchAnswers({ type: { type: params.Type }, dispatch }))
    }, [])


    return (
        <>
            <SectionCarts>
                <TitleComp>{tittleCategoryInAnswers}</TitleComp>
                <ContainerCart>
                    {(isAnswerLoading ? [...Array(2)] : itemsAnswer).map((obj, index) => isAnswerLoading
                        ? <Skeleton
                            sx={{ bgcolor: 'grey.500', borderRadius: "15px" }}
                            variant="rectangular"
                            width={300}
                            height={450}
                        />
                        : 
                        <CartAnswer
                            key={obj._id}
                            idProp={obj._id}
                            leftColor={obj.leftColor}
                            rightColor={obj.rightColor}
                            TittleText={obj.tittle}
                            CartText={obj.shortAnswer}
                            srcLink={obj.linkSourceAnswer}
                            Type={obj.typeCategory}
                        ></CartAnswer>
                    )
                    }
                </ContainerCart>
            </SectionCarts>
            {
                isShowModalRemove === true
                    ? <ModalRemove></ModalRemove>
                    : <></>
            }
            {
                isShowModalUpdate === true
                    ? <ModalUpdate></ModalUpdate>
                    : <></>
            }
        </>
    )
}

export default GeneralCategory
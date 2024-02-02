import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import carts from "../../styles/cart.css";
import GlobalStyle from "../../styles/global.css";
import Cart from "../comps/Cart";
import { fetchCategories } from "../../Redux-state/reducers/showCards";
import ModalRemove from "../views/local/ModalRemove";
import ModalUpdate from "../views/local/ModalUpdate";
import { Skeleton } from '@mui/material';

const { ContainerCart, SectionCarts } = carts
const { TitleComp } = GlobalStyle
const BGcolor = "linear-gradient( to right,#ee0005f3,#8e9eab)"

function MainCategory() {

    const dispatch = useDispatch()
    const { itemsCategory, statusCategory } = useSelector(state => state.showCards),
        isShowModalRemove = useSelector(state => state.removeCard.isShowModalRemove),
        isShowModalUpdate = useSelector(state => state.updateCard.isShowModalUpdate)
    const isCardsLoading = statusCategory === "loading"

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <>
            <SectionCarts>
                <TitleComp>Выберите категорию теста</TitleComp>
                <ContainerCart>
                    {(isCardsLoading ? [...Array(2)] : itemsCategory).map((obj, index) => isCardsLoading
                        ?
                        <Skeleton
                            sx={{ bgcolor: 'white', borderRadius: "15px" }}
                            variant="rectangular"
                            width={300}
                            height={450}
                        />
                        :
                        <Cart
                            key={obj._id}
                            id={obj._id}
                            TittleText={obj.tittle}
                            CartText={obj.listQuestions}
                            Type={obj.typeCategory}
                            leftColor={obj.leftColor}
                            rightColor={obj.rightColor}
                        ></Cart>
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

export default MainCategory
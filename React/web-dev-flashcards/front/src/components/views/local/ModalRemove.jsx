import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { switchShowModalRemove, fetchAnswersRemove, fetchCategoryRemove } from "../../../Redux-state/reducers/removeCard";
import { switchStatusRemove } from "../../../Redux-state/reducers/removeCard";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalRemove(props) {

    const navigate = useNavigate()

    const isShowModalRemove = useSelector(state => state.removeCard.isShowModalRemove),
          showType = useSelector(state => state.switchTypeAnswer.type),
          id = useSelector(state => state.removeCard.id),
          typeCategory = useSelector(state => state.removeCard.typeCategory),
          type = useSelector(state => state.switchTypeAnswer.type)
          
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(switchStatusRemove("disabled"))
        dispatch(switchShowModalRemove(false));
    };

    const handleRemoveCartAnswer = () => {
        dispatch(fetchAnswersRemove({id, showType, dispatch}))
        dispatch(switchShowModalRemove(false));
        navigate(`/Answer/${showType}`)
        dispatch(switchStatusRemove("disabled"))
    }

    const handleRemoveCartCategory = () => {
        dispatch(fetchCategoryRemove({typeCategory, dispatch}))
        dispatch(switchShowModalRemove(false));
        navigate(`/category`)
        dispatch(switchStatusRemove("disabled"))
    }

    return (
        <>
            <Dialog
                open={isShowModalRemove}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ты точно хочешь безвозвратно удалить карточку?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => handleClose()} autoFocus>Нет</Button>
                    <Button onClick={() => 
                        {
                            if (type === "category") {
                                handleRemoveCartCategory()
                            } else {
                                handleRemoveCartAnswer()
                            }
                        }
                        }>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
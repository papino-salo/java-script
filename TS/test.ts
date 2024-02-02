// type rec = IResponseSuccess | IResponseFailed

// function isSucsess(rec: rec): rec is IResponseSuccess {
//     return (rec as IResponseSuccess).status === PaymentStatus.Success
// }

// function f(rec: rec) {
//     if (isSucsess(rec)) {
//         return rec.data.databaseId
//     } else {
//         throw new Error(rec.data.errorMessage)
//     }
// }
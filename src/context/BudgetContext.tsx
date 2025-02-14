import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react"
import { BudgetAction, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetAction>
    totalExpense : number
    remainingBudget : number
}
type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpense

    return (
        <BudgetContext.Provider value={{
            state,
            dispatch,
            totalExpense,
            remainingBudget
        }} >
            {children}
        </BudgetContext.Provider>
    )
}
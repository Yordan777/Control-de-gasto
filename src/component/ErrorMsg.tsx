import { PropsWithChildren } from "react"

function ErrorMsg({children}: PropsWithChildren) {
  return (
    <p className=" bg-red-600 p-2 font-bold text-white text-sm text-center">{children}</p>
  )
}

export default ErrorMsg
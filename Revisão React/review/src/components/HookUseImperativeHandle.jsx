import { useRef } from "react"
import { SomeComponent } from "./SomeComponent"

export const HookUseImperativeHandle = () => {

    const componentRef = useRef()

  return (
    <div>
        <SomeComponent ref={componentRef}/>
        <button onClick={() => componentRef.current.validate()}>Validate</button>
        <hr />
    </div>
  )
}

import { useSelector } from "react-redux"

export default function Cart() {
  const {value} = useSelector((state) => state.counterReducers)
  return (
    <div>Cart : {value}</div>
  )
}

import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"
let reducer = (state, action) => {
    switch (action.type) {

        case "show":
            return {
                val: state.val === '0' ? action.val : state.val + action.val,
            };


        case "del":
            return {
                val: action.val,
            }
        case "AC":
            return {
                ac: action.ac,
            }
        case "eq":
            return {
                val: eval(state.val)
            }
        case "parth":
            return {
                val: state.val

            }

        default:
            return { ...state.val };

    }


}
export default function App() {
    let intialstate = {
        val: '0'
    };
    let [state, dispatch] = useReducer(reducer, intialstate)
    let [test, settest] = useState(false)
    function handle(e) {
        dispatch({ type: "show", val: e.target.value })





    }
    function back(e) {
        dispatch({ type: "del", val: state.val.slice(0, -1) })


    }
    function Ac(e) {
        dispatch({ type: "AC", ac: state.ac = "" })

    }
    function eq(e) {
        dispatch({ type: "eq", val: state.val })
        settest(true)
    }
    function parth(e) {
        dispatch({ type: "parth", val: state.val = `(-${state.val})` })
        settest(true)

    }



    return (
        <>
            <h3 className="text-center">Calculator</h3>
            <div id="con">

                <div id="res">
                    <h6>
                        {test === false ? state.val : state.val}
                        {/* <input value={test == false ? state.val : state.val} /> */}


                    </h6>


                </div>
                <div id="btns" >
                    <button id="ac" onClick={(e) => { Ac(e) }}  > Ac   </button>
                    <button onClick={(e) => { back(e) }} > &#x2794; </button>
                    <button value={"("} onClick={(e) => { parth(e) }}  > ()   </button>
                    <button value={"1"} onClick={(e) => { handle(e) }}  > 1   </button>
                    <button value={"2"} onClick={(e) => { handle(e) }}  > 2   </button>
                    <button value={"3"} onClick={(e) => { handle(e) }}   > 3    </button>
                    <button value={"+"} onClick={(e) => { handle(e) }}  >  +  </button>
                    <button value={"4"} onClick={(e) => { handle(e) }}   > 4   </button>
                    <button value={"5"} onClick={(e) => { handle(e) }}   > 5   </button>
                    <button value={"6"} onClick={(e) => { handle(e) }}   > 6   </button>
                    <button value={"-"} onClick={(e) => { handle(e) }}  > -   </button>
                    <button value={"7"} onClick={(e) => { handle(e) }}   > 7   </button>
                    <button value={"8"} onClick={(e) => { handle(e) }}   > 8   </button>
                    <button value={"9"} onClick={(e) => { handle(e) }}  > 9   </button>
                    <button value={"*"} onClick={(e) => { handle(e) }}  > X   </button>
                    <button value={"0"} onClick={(e) => { handle(e) }}  > 0   </button>
                    <button value={"00"} onClick={(e) => { handle(e) }}   > 00   </button>
                    <button value={"000"} onClick={(e) => { handle(e) }}   > 000   </button>
                    <button value={"/"} onClick={(e) => { handle(e) }}  > /   </button>
                    <button value={"%"} onClick={(e) => { handle(e) }}  > %   </button>
                    <button value={"."} onClick={(e) => { handle(e) }}  > .   </button>
                    <button id="eq" onClick={(e) => { eq(e) }}  > =   </button>







                </div>
            </div>



        </>
    )
}
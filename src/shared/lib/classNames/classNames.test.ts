import {classNames} from "./classNames";


describe("classNames", ()=>{

    test("with first param",()=>{
        expect(classNames("somecls")).toBe("somecls")
    })
    test("with empty mod",()=>{
        const expected = "somecls class class2"
        expect(classNames("somecls",{},["class","class2"])).toBe(expected)
    })
    test("with element in mode",()=>{
        const expected = "somecls class class2 hovered"
        expect(classNames("somecls",{hovered:true},["class","class2"])).toBe(expected)
    })
    test("with false element in mode",()=>{
        const expected = "somecls class class2"
        expect(classNames("somecls",{hovered:false},["class","class2"])).toBe(expected)
    })
    test("with undefined element in mode",()=>{
        const expected = "somecls class class2"
        expect(classNames("somecls",{hovered:undefined},["class","class2"])).toBe(expected)
    })
})
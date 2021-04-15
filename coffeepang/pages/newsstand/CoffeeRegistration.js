import {useDispatch} from "react-redux";import {useState} from "react";import {addGoods} from "../../coffeeRedux";import Link from 'next/link';import Button from '@material-ui/core/Button';const coffeeConfig = {    id: 3, // 인덱스 처리를 어떻게 할 것인가?    seller: '박희찬',    coffeeName: "코피루왘",    price: "1000000",    weight: 500,    description: '커피 똥 커피',    img : "/coffeeImg.jpg",}const CoffeeRegestration = () => {    const dispatch = useDispatch();    const [coffee, setCoffee] = useState(coffeeConfig);    const setCoffeeName = (coffeeName) => {        coffeeConfig.coffeeName = coffeeName;        setCoffee(coffeeConfig);    }    const setCoffeePrice = (coffeePrice) => {        coffeeConfig.price = coffeePrice;        setCoffee(coffeeConfig);    }    const setCoffeeWeight = (weight) => {        coffeeConfig.weight = weight;        setCoffee(coffeeConfig);    }    const setCoffeeDescription = (description) => {        coffeeConfig.description = description;        setCoffee(coffeeConfig);    }    return (        <>            <h1>커피등록</h1>            <input placeholder={"커피이름"} onChange={e => setCoffeeName(e.target.value)} />            <input placeholder={"가격"} onChange={e => setCoffeePrice(e.target.value)} />            <input placeholder={"무게"} onChange={e => setCoffeeWeight(e.target.value)} />            <input placeholder={"자세한 설명"} onChange={e => setCoffeeDescription(e.target.value)} />            <br/>            <Button variant={"contained"}                    color={"secondary"}                    children={"등록"}                    onClick={() => dispatch(addGoods(coffee))} />            <Link href={'/'}>                <Button variant={"contained"}                        color={"secondary"}                        children={"홈으로"} />            </Link>        </>    )}export default CoffeeRegestration;
import {makeAutoObservable} from "mobx"

export default class DeviceStore{
    constructor(){
        this._types = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Холодильники'},
    
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'},
        ]
        this._devices = [
            {id:1, name:'Samsung', price: 25000, rating:5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            {id:2, name:'Samsung', price: 25000, rating:5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            {id:3, name:'Samsung', price: 25000, rating:5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            {id:4, name:'Samsung', price: 25000, rating:5, img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
            
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}
function transformedArray(value:number[], transformation:(value: number)=>number):number[]{
    const transformedNumber: number[]= [];
      for(let index:number = 0; index < value.length; index++){
        transformedNumber.push(transformation(value[index]!))
      }
      return transformedNumber
}

const doubledArray = transformedArray([], (value)=> value*2)
console.log(doubledArray)
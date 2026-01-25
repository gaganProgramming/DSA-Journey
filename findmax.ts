function getMax(values: number[]):number|null{
    if(values.length === 0) return null;
    let max = values[0];
    for(let index = 1; index< values.length; index++){
        if(values[index]! > max!)
           max = values[index];
    }
    return max!;
}

const maximumNumber = getMax([1, 2, 3, 4, 15, 4, 1])
  console.log(maximumNumber)
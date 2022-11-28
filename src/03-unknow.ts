let anyVar: any

anyVar = ''
anyVar = 2
anyVar = []
anyVar = {}
let isNew: boolean = anyVar
anyVar.toUppercase()
//we've seen that any does not control nothing, lets try with unknow

let unknowVar: unknown

unknowVar = ''
unknowVar = 2
unknowVar = []
unknowVar = {}

if(typeof unknowVar === 'boolean'){
  let isNew2: boolean = unknowVar
}

if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase()

}

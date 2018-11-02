
# Página para visualizar noticias

## Componentes
|Componente|props|default|
|:---:|---|---|
|News|news,title|none|



### ¿ Como uso Redux?

1. Crear reducers

 Para manejar el estado de las noticias
 
```javascript
const Initialstate = {

}
const news = (state = initialState,action) =>{
 switch(action.type){
    case "XXXX"
    return state
   }
}

```

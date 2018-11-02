
# Página para visualizar noticias (Create-react-app)

#### En esta página podras:
- Ver noticias de último momento
- Filtrar las noticias pot categorias
- Seleccionar un país especifico
- Realizar Busquedas

### ¿Comó Empezar a usarla?
1. git clone.
2. `npm install` ó `yarn install`.
3. `npm start`


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
   //.....
}
export default news

```
 2. Crear Store de Redux
 
 ### ¿ De que servicio obtengo las noticias?
   Documentación
   
  [APINEWS.org](https://newsapi.org/)

import React from 'react'
import { createRoot } from 'react-dom/client'


const reactElement =React.createElement(
   'a',
   {href:'https://google.com'},
   'Hello, world!'
)




createRoot(document.getElementById('root')).render(              

reactElement


//<App />                   //main file renders the components as in a virtual dom .ie custom tags
//to simplyfy this and as its easy to create html tags( bundlers like babel are used they parsing of  html structre in a tree format as the brower cant understand to this format  
)

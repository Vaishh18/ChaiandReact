function customRender(reactElement,container){
//    const domElement=document.createElement(reactElement.type)
//    domElement.innerHTML =reactElement.children
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)
//    container.appendChild(domElement)

const domElement = document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
   if(prop=== 'children')continue;
   domElement.setAttribute(prop,reactElement.props[prop]) 
}
    container.appendChild(domElement)
}


const reactElement={
    type:"a",
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children: 'Click me to visit google'

}//to simplyfy this and as its easy to create html tags( bundlers like babel are used they parsing of  html structre in a tree format as the brower cant understand to this format 
const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
function customRender(reactElement,mainConatainer){
    /*  const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.innerHTML;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    mainConatainer.appendChild(domElement);

    */

    //more optimized way to set the attributes because their may be multiple attibutes for the single object

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.innerHTML;
    
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    mainConatainer.appendChild(domElement)
    }

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    innerHTML:"click here so that you are directed to the google website"
}


const mainConatainer=document.querySelector('#root');

customRender(reactElement,mainConatainer);              //we are rendering the reactElement into the maincontainer


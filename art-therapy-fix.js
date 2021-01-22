const virtualTourModule = document.getElementById('tour-evms')

const findParent = document.querySelector('.specializations').parentElement

let targetNode = document.querySelector('.specializations').parentElement.childNodes
// targetNode = targetNode[13].parentNode.childNodes 

// targetNode = targetNode[6]

let selectedNode = document.querySelector('.specializations').parentElement.childNodes

console.log(selectedNode)
selectedNode = selectedNode[17]


const cloneNode = selectedNode.cloneNode(true)
cloneNode.setAttribute('id', 'tag-this-node')
console.log(cloneNode)

// remove node from dom after cloning
selectedNode.remove()

// insert removed node above virtual tour module
virtualTourModule.insertBefore(cloneNode, virtualTourModule) 

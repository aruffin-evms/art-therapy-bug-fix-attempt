
const virtualTourModule = document.getElementById('tour-evms')

// find div i want to move
const specializationsNode = document.querySelector('.specializations')

// clone the specializations node and add an ID. the cloned node should be inserted above the virtual tour
const clonedNode = specializationsNode.cloneNode(true)
clonedNode.setAttribute('id', 'tag-this-node')



// remove node from dom after cloning
specializationsNode.remove()

// insert removed node above virtual tour module
// ______________________________________________
// can't detect parent div with the ID mm-0. target attempts failed
// let targetNode = document.querySelector('.specializations').parentElement.childNodes
// targetNode = targetNode[13].parentNode.childNodes 

// targetNode = targetNode[6]

// virtualTourModule.insertBefore(cloneNode, virtualTourModule) 

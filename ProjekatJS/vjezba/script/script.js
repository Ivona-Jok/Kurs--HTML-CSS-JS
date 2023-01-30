// document.body.children[2].children[1].href = 'https://google.com'

// console.dir(document);


// let anchorElement = document.querySelector('#external-link');
// anchorElement.href = 'https://google.com';

//ADD AN ELEMENT
     //1. Create the new element
         let newAnchorElement = document.createElement('a');
         newAnchorElement.href = 'https://google.com';
         newAnchorElement.textContent = ' This leads to Google';

     //2. Get access to perent element that should hold the new element
         let firstParagraf = document.querySelector('p');

     //3. Insert the new element into the parent element content
         firstParagraf.append(newAnchorElement);


//REMOVE ELEMENT
     //1. Select the element
         let firstH1Element = document.querySelector('h1');

     //2. Remove it!
         firstH1Element.remove();

    //for older browser
             //firstH1Element.parentElement.removeChild(firstH1Element);


//MOVE ELEMENT
     firstParagraf.parentElement.append(firstParagraf);
     //OR       firstParagraf.parentElement.insertBefore(firstParagraf);


//innerHTML
     console.log(firstParagraf.innerHTML);






